// sessions.spec.cy.js - Test Cypress completo con mock William Hill
describe("Sessions API - William Hill Mock", () => {

  // Ticket fittizio valido per GET e DELETE (il mock POST restituisce "" quindi lo ignoriamo)
  const sessionTicket = "dummy-ticket-123";

  // Test login (mock POST /tickets)
  it("should log in a customer and obtain a session ticket", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3002/v2/sessions/tickets",
      failOnStatusCode: false // il mock non ha dati reali, così non fallisce se ticket vuoto
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("ticket");
      expect(response.body).to.have.property("expiryDateTime");
      expect(response.body).to.have.property("extended");
    });
  });

  // Test check validity (mock GET /tickets/:tgt/serviceTicket)
  it("should check validity of a session ticket", () => {
    cy.request({
      method: "GET",
      url: `http://localhost:3002/v2/sessions/tickets/${sessionTicket}/serviceTicket`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("ticket");
      expect(response.body).to.have.property("location");
    });
  });

  // Test logout (mock DELETE /tickets/:tgt)
  it("should log out a customer", () => {
    cy.request({
      method: "DELETE",
      url: `http://localhost:3002/v2/sessions/tickets/${sessionTicket}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success");
    });
  });

});
