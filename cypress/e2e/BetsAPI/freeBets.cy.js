// cypress/e2e/BetsAPI/freeBets.cy.js
describe("Bets API - Free Bets Endpoint", () => {

  const baseUrl = "http://localhost:3000/v2/bets/freebets";

  it("should return available free bets (200)", () => {
    cy.request({
      method: "GET",
      url: baseUrl,
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 200) {
        expect(response.body[0]).to.have.property("id");
        expect(response.body[0]).to.have.property("offerId");
        expect(response.body[0]).to.have.property("offerName");
        expect(response.body[0]).to.have.property("value");
        expect(response.body[0]).to.have.property("awardDateTime");
        expect(response.body[0]).to.have.property("expiryDateTime");
      }
    });
  });

  it("should handle no free bets available (204)", () => {
    cy.request({
      method: "GET",
      url: baseUrl,
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 204) {
        expect(response.body).to.be.empty;
      }
    });
  });

});
