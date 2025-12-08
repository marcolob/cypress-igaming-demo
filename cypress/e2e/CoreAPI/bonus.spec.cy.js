describe('Bonus System — API only', () => {

  it('should retrieve free bets', () => {
    cy.request('GET', 'http://localhost:3000/v2/bets/freebets').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.length.greaterThan(0);
      console.log('Free bet value:', res.body[0].value);
      expect(res.body[0].value).to.exist;
    });
  });

  it('should place a single bet', () => {
    const betData = {
      selectionId: 12345,
      stake: 100
    };
    cy.request('POST', 'http://localhost:3000/v2/bets/bet/single', betData).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body[0].totalStake).to.exist;
      expect(res.body[0].totalStake).to.be.above(0);
      console.log('Placed single bet:', res.body[0]);
    });
  });

});
