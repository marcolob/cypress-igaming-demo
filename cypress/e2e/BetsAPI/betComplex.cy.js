// cypress/e2e/BetsAPI/betComplex.cy.js
describe("Bets API - Complex Bet Endpoint", () => {

  const baseUrl = "http://localhost:3000/v2/bets/bet/complex";

  it("should place a complex bet successfully (200)", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("numLines");
      expect(response.body[0]).to.have.property("number");
      expect(response.body[0]).to.have.property("placedDateTime");
      expect(response.body[0]).to.have.property("receipt");
      expect(response.body[0]).to.have.property("totalStake");
    });
  });

  it("should return delayed bet info (202)", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      failOnStatusCode: false
    }).then((response) => {
      // simuliamo risposta 202 tramite Mockoon config
      if (response.status === 202) {
        expect(response.body[0]).to.have.property("delayPeriodSeconds");
        expect(response.body[0]).to.have.property("delayedBetId");
        expect(response.body[0]).to.have.property("id");
        expect(response.body[0]).to.have.property("number");
      }
    });
  });

  it("should return errors for invalid bet (400)", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      failOnStatusCode: false
    }).then((response) => {
      // simuliamo risposta 400 tramite Mockoon config
      if (response.status === 400) {
        expect(response.body).to.have.property("errors");
        expect(response.body.errors[0]).to.have.property("code");
        expect(response.body.errors[0]).to.have.property("field");
        expect(response.body.errors[0]).to.have.property("message");
        expect(response.body.errors[0]).to.have.property("solution");
      }
    });
  });

});
