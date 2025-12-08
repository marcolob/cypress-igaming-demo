// cypress/e2e/BetsAPI/betslips.cy.js
describe("Bets API - Betslips Endpoint", () => {

  const baseUrl = "http://localhost:3000/v2/bets/betslips";

  it("should return a structured betslip (200)", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("betslip");
      expect(response.body.betslip[0]).to.have.property("betMultiplier");
      expect(response.body.betslip[0]).to.have.property("freeBets");
      expect(response.body.betslip[0]).to.have.property("legs");
      expect(response.body.betslip[0]).to.have.property("maxStake");
      expect(response.body.betslip[0]).to.have.property("minStake");
      expect(response.body.betslip[0]).to.have.property("numLines");
      expect(response.body.betslip[0]).to.have.property("number");
      expect(response.body.betslip[0]).to.have.property("typeCode");
      expect(response.body.betslip[0]).to.have.property("typeName");

      // Controllo proprietà annidate: freeBets e legs
      const freeBet = response.body.betslip[0].freeBets[0];
      expect(freeBet).to.have.property("id");
      expect(freeBet).to.have.property("offerId");
      expect(freeBet).to.have.property("value");

      const legPart = response.body.betslip[0].legs[0].parts[0];
      expect(legPart).to.have.property("eachWayAvailable");
      expect(legPart).to.have.property("includeInMultiple");
      expect(legPart).to.have.property("legGroup");
      expect(legPart).to.have.property("priceDen");
      expect(legPart).to.have.property("priceNum");
      expect(legPart).to.have.property("selectionId");
    });
  });

});
