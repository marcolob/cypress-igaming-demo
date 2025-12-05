describe('Casino Games List', () => {
  it('should fetch and validate games', () => {
    cy.request('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.length).to.be.greaterThan(0)
        cy.log('First game: ' + res.body[0].title)
      })
  })
})
