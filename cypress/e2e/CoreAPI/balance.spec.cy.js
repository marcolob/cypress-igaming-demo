describe("Accounts API - Balance", () => {

  it("should return the current balance", () => {
    cy.request("GET", "http://localhost:3001/v2/accounts/account/balance")
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("balance");
        expect(response.body.balance).to.be.a("number");
      });
  });

});
