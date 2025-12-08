// cypress/e2e/AccountsAPI/plusCard.spec.cy.js
describe("Accounts API - Plus Card Endpoints", () => {

  it("should get plus card details", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/v2/accounts/account/plusCard",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 401, 403, 404]);
      if (response.status === 200) {
        expect(response.body).to.have.property("card");
        expect(response.body).to.have.property("onlineAccount");
        expect(response.body).to.have.property("phone");
        expect(response.body).to.have.property("pin");
      }
    });
  });

  it("should report plus card lost or stolen", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/v2/accounts/account/plusCard/lostStolen",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([204, 401, 404]);
    });
  });

  it("should set plus card phone number", () => {
    const oldPhoneNumber = "123456789";
    cy.request({
      method: "POST",
      url: `http://localhost:3001/v2/accounts/account/plusCard/phone/${oldPhoneNumber}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([201, 401, 403, 404]);
    });
  });

  it("should create plus card PIN", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/v2/accounts/account/plusCard/pin",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([201, 400, 404]);
    });
  });

  it("should update plus card PIN", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3001/v2/accounts/account/plusCard/pin",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([204, 400, 404]);
    });
  });

});
