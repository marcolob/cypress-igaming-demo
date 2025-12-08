// serviceTicket.spec.cy.js - Test Cypress per check validity
describe("Sessions API - William Hill Mock Service Ticket", () => {
  const sessionTicket = "dummy-ticket-123";

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
});
