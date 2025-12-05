describe('Player Balance - Mock Casino API', () => {
  it('loads player balance', () => {
    cy.request('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.id).to.eq(1)
        cy.log('User: ' + res.body.name)
      })
  })
})
