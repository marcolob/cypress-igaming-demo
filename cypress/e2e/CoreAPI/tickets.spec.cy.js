describe("ACCOUNTS – Tickets API", () => {

  it("should create a new ticket", () => {
    cy.request("POST", "http://localhost:3001/v2/accounts/bets/tickets/new", {
      stake: 50,
      selectionId: 12345
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.id).to.exist;
      expect(response.body.status).to.eq("open");
    });
  });

  it("should retrieve active tickets", () => {
    cy.request("GET", "http://localhost:3001/v2/accounts/bets/tickets/active")
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);
      });
  });

});
