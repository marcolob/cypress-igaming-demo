// cypress/e2e/BetsAPI/history.cy.js
describe("Bets API - History Endpoint", () => {

  const baseUrl = "http://localhost:3000/v2/bets/history";

  it("should retrieve bet history successfully (200)", () => {
    cy.request({
      method: "GET",
      url: baseUrl,
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 200) {
        expect(response.body).to.have.property("bets");
        const bet = response.body.bets[0];
        expect(bet).to.have.property("id");
        expect(bet).to.have.property("numLines");
        expect(bet).to.have.property("numSelections");
        expect(bet).to.have.property("stake");
        expect(bet).to.have.property("stakePerLine");
        expect(bet).to.have.property("settled");

        // Controllo legs e parts
        const leg = bet.legs[0];
        const part = leg.parts[0];
        expect(part).to.have.property("number");
        expect(part).to.have.property("priceNum");
        expect(part).to.have.property("priceDen");
        expect(part).to.have.property("selectionId");
      }
    });
  });

  it("should handle no history found (404)", () => {
    cy.request({
      method: "GET",
      url: baseUrl,
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 404) {
        expect(response.body).to.have.property("errors");
        const error = response.body.errors[0];
        expect(error).to.have.property("code");
        expect(error).to.have.property("message");
        expect(error).to.have.property("solution");
      }
    });
  });

});
