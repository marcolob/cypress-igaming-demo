// cypress/e2e/jackpots/jackpot.spec.cy.js
describe('Jackpots API — API only', () => {
  const base = 'http://localhost:3000';

  it('should retrieve jackpot sessions (correct endpoint)', () => {
    // Endpoint corretto: /v2/bets/sessions/jackpots
    cy.request({
      method: 'GET',
      url: `${base}/v2/bets/sessions/jackpots`,
    }).then((res) => {
      // Verifica lo status
      expect(res.status).to.eq(200);

      // Verifica che il body sia un array con almeno un elemento
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.be.greaterThan(0);

      // Verifica la struttura del primo elemento
      const first = res.body[0];
      expect(first).to.have.property('id');
      expect(first).to.have.property('name');
      expect(first).to.have.property('amount');

      // Log utile per debug
      cy.log('jackpots loaded:', res.body.length);
    });
  });

  it('should tolerate fallback path (optional for debugging)', () => {
    // Solo per debug se l’endpoint principale non esiste
    cy.request({
      method: 'GET',
      url: `http://localhost:3000/v2/bets/v2/bets/sessions/jackpots`,
      failOnStatusCode: false,
    }).then((res) => {
      cy.log('fallback status', res.status);
      if (res.status === 200) {
        expect(res.body).to.be.an('array');
      } else {
        cy.log('fallback returned non-200, body:', JSON.stringify(res.body).slice(0, 500));
      }
    });
  });

});
