describe("Games API", () => {

  it("should retrieve the games list", () => {
    cy.request("GET", "http://localhost:3000/v2/bets/games")
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);

        cy.log("Games loaded:", response.body.length);
      });
  });

  it("should retrieve casino games", () => {
    cy.request("GET", "http://localhost:3000/v2/bets/casino")
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);

        cy.log("Casino games:", response.body);
      });
  });

  it("should retrieve slots", () => {
    cy.request("GET", "http://localhost:3000/v2/bets/slots")
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);

        cy.log("Slots loaded:", response.body.length);
      });
  });

});
