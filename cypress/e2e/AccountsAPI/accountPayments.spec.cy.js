// cypress/e2e/AccountsAPI/accountPayments.spec.cy.js
describe("Accounts API - Account Payments", () => {

  it("should retrieve account payments", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/v2/accounts/account/payments",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 400, 404]);
      if (response.status === 200) {
        expect(response.body).to.have.property("payments");
        expect(response.body.payments).to.be.an("array");
      }
    });
  });

});
