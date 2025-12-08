// login.spec.cy.js - Test Cypress per login
describe("Sessions API - William Hill Mock Login", () => {
  it("should log in a customer and obtain a session ticket", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3002/v2/sessions/tickets",
      failOnStatusCode: false // mock non ha dati reali
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("ticket");
      expect(response.body).to.have.property("expiryDateTime");
      expect(response.body).to.have.property("extended");
    });
  });
});
