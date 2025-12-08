// logout.spec.cy.js - Test Cypress per logout
describe("Sessions API - William Hill Mock Logout", () => {
  const sessionTicket = "dummy-ticket-123";

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
