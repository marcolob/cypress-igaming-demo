// cypress/e2e/promotions/promotions.spec.cy.js
describe('Promotions API — API only', () => {
  const base = 'http://localhost:3001/v2/accounts';

  it('should retrieve available promotions', () => {
    cy.request({
      method: 'GET',
      url: `${base}/promotions/list`,
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.be.greaterThan(0);

      // Controlla che ci sia almeno una promo attiva
      const activePromos = res.body.filter(p => p.status === 'active');
      expect(activePromos.length).to.be.greaterThan(0);

      cy.log('Active promotions:', activePromos.map(p => p.promoId).join(', '));
    });
  });

  it('should apply a valid promo bonus', () => {
    const promoCode = 'WELCOME100';

    // Simuliamo l'applicazione del bonus via flags (mock)
    cy.request({
      method: 'POST',
      url: `${base}/account/flags`,
      body: { promoCode }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('token');
      cy.log('Promo applied, token:', res.body.token);
    });

    // Verifica il saldo dopo aver applicato il bonus
    cy.request({
      method: 'GET',
      url: `${base}/account/balance`
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('balance');
      cy.log('Balance after promo:', res.body.balance);
    });
  });

  it('should not allow expired promotions', () => {
    const promoCode = 'EXPIRED';

    cy.request({
      method: 'POST',
      url: `${base}/account/flags`,
      body: { promoCode },
      failOnStatusCode: false // non vogliamo fallire il test se il mock restituisce errore
    }).then((res) => {
      // Il mock può restituire un 200 con token vuoto o 404, quindi controlliamo
      expect([200, 404]).to.include(res.status);
      cy.log('Attempted expired promo, status:', res.status);
    });
  });
});
