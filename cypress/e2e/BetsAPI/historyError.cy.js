// cypress/e2e/BetsAPI/historyError.cy.js
describe("Bets API - History Endpoint Error Simulation", () => {

  it("should return 404 error with structured JSON", () => {
   cy.request({
  method: "GET",
  url: "http://localhost:3000/v2/bets/history",
  failOnStatusCode: false
}).then((response) => {
  if (response.status === 200) {
    // assertions per success
  }
  if (response.status === 404) {
    // assertions per error
}
    });
  });

});
