// cypress/support/commands.js

// Place a single bet
Cypress.Commands.add('placeSingleBet', (betData) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/v2/bets/bet/single',
    body: betData,
    failOnStatusCode: false
  }).then((resp) => {
    cy.wrap(resp.body[0]).as('betResult')
  })
})

// Place a complex/multiple bet
Cypress.Commands.add('placeComplexBet', (betData) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/v2/bets/bet/complex',
    body: betData,
    failOnStatusCode: false
  }).then((resp) => {
    cy.wrap(resp.body[0]).as('complexBetResult')
  })
})

// Get betslip
Cypress.Commands.add('getBetslip', () => {
  cy.request('POST', 'http://localhost:3000/v2/bets/betslips').then((resp) => {
    cy.wrap(resp.body.betslip[0]).as('betslip')
  })
})

// Get free bets
Cypress.Commands.add('getFreeBets', () => {
  cy.request('GET', 'http://localhost:3000/v2/bets/freebets').then((resp) => {
    cy.wrap(resp.body).as('freeBets')
  })
})

// Get bet history
Cypress.Commands.add('getBetHistory', () => {
  cy.request('GET', 'http://localhost:3000/v2/bets/history').then((resp) => {
    cy.wrap(resp.body.bets).as('history')
  })
})
