// cypress/e2e/BetsAPI/cashin.cy.js
describe("Bets API - Cashin Endpoint", () => {

  const baseUrl = "http://localhost:3000/v2/bets";
  const betId = "12345"; // id di esempio, puoi usare Mockoon per regolare l'ID

  it("should cash in a bet successfully (200)", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/${betId}/cashin`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success");
      expect(response.body.success).to.be.a("boolean");
    });
  });

  it("should return error for invalid request (400)", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/${betId}/cashin`,
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 400) {
        const error = response.body.errors[0];
        expect(error).to.have.property("code");
        expect(error).to.have.property("message");
        expect(error).to.have.property("solution");
      }
    });
  });

  it("should return conflict error (409)", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/${betId}/cashin`,
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 409) {
        const error = response.body.errors[0];
        expect(error).to.have.property("code");
        expect(error).to.have.property("message");
        expect(error).to.have.property("solution");
      }
    });
  });

});
