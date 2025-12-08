// cypress/e2e/AccountsAPI/account.spec.cy.js
describe("Accounts API - Account Endpoints", () => {

  it("should retrieve account details", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/v2/accounts/account",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 401]);
      if (response.status === 200) {
        expect(response.body).to.have.property("accountId");
        expect(response.body).to.have.property("customerId");
        expect(response.body).to.have.property("email");
      }
    });
  });

  it("should retrieve account balance", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/v2/accounts/account/balance",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 401]);
      if (response.status === 200) {
        expect(response.body).to.have.property("balance");
        expect(response.body).to.have.property("availableFunds");
        expect(response.body).to.have.property("withdrawableFunds");
      }
    });
  });

});
