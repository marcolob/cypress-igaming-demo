describe('API: classes/:classId/competitions/', () => {
  const baseUrl = 'http://localhost:3000/v2/sportsdata';

  it('should return competitions successfully (200)', () => {
    const classId = '1';

    cy.request({
      method: 'GET',
      url: `${baseUrl}/classes/${classId}/competitions/`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('competitions');
    });
  });

  it('should return error for invalid classId (400)', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/classes/invalid/competitions/`,
      failOnStatusCode: false,
    }).then((response) => {

      if (response.status === 400) {
        const error = response.body.errors[0];
        expect(error).to.have.property("code");
        expect(error).to.have.property("field");
        expect(error).to.have.property("message");
      }
    });
  });

  it('should return not found error (404)', () => {
    const nonExisting = '999999';

    cy.request({
      method: 'GET',
      url: `${baseUrl}/classes/${nonExisting}/competitions/`,
      failOnStatusCode: false,
    }).then((response) => {

      if (response.status === 404) {
        const error = response.body.errors[0];
        expect(error).to.have.property("code");
        expect(error).to.have.property("field");
        expect(error).to.have.property("message");
      }
    });
  });
});
