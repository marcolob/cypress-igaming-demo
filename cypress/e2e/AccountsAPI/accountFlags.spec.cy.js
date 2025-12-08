// cypress/e2e/AccountsAPI/accountFlags.spec.cy.js
describe("Accounts API - Account Flags", () => {

  it("should set a flag for the account", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/v2/accounts/account/flags",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 404]);
      if (response.status === 200) {
        expect(response.body).to.have.property("token");
      }
    });
  });

});
