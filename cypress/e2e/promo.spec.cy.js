describe('Casino Promotions', () => {
  it('should return available promotions', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.length).to.be.greaterThan(0)
        cy.log('First promo: ' + res.body[0].title)
      })
  })
})
