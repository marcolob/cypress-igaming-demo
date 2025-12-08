// cypress/e2e/GamesAPI/games.cy.js
describe("Games API", () => {
  const base = "http://localhost:3000/v2/bets";

  it("should retrieve the games list", () => {
    cy.request("GET", `${base}/games`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);

      // Verifica alcune proprietà del primo elemento
      const firstGame = response.body[0];
      expect(firstGame).to.have.property("id");
      expect(firstGame).to.have.property("name");

      cy.log("Games loaded:", response.body.length);
    });
  });

  it("should retrieve casino games", () => {
    cy.request("GET", `${base}/casino`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);

      const firstCasino = response.body[0];
      expect(firstCasino).to.have.property("id");
      expect(firstCasino).to.have.property("name");

      cy.log("Casino games loaded:", response.body.length);
    });
  });

  it("should retrieve slots", () => {
    cy.request("GET", `${base}/slots`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);

      const firstSlot = response.body[0];
      expect(firstSlot).to.have.property("id");
      expect(firstSlot).to.have.property("name");

      cy.log("Slots loaded:", response.body.length);
    });
  });
});
