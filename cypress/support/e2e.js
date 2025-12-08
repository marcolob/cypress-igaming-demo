// Cypress Support File

// Importa eventuali page objects o helpers
import './cartPage.js';
import './commands.js'; // Assicurati di avere questo file

// ------------------------
// Mock dei comandi custom
// ------------------------
Cypress.Commands.add('login', (username = 'testUser', password = 'password') => {
  // Mock login: puoi anche usare cy.visit('/login') se hai la pagina reale
  cy.log(`Logging in as ${username}`);
  cy.window().then((win) => {
    win.localStorage.setItem('user', JSON.stringify({ username, balance: 1000 }));
  });
});

Cypress.Commands.add('resetBalance', (amount = 1000) => {
  cy.log(`Resetting balance to ${amount}`);
  cy.window().then((win) => {
    const user = JSON.parse(win.localStorage.getItem('user')) || {};
    user.balance = amount;
    win.localStorage.setItem('user', JSON.stringify(user));
  });
});

Cypress.Commands.add('resetBonuses', () => {
  cy.log('Resetting mock bonuses');
  cy.window().then((win) => {
    win.localStorage.setItem('bonuses', JSON.stringify([
      { code: 'WELCOME100', amount: 100, expired: false },
      { code: 'EXPIRED50', amount: 50, expired: true },
    ]));
  });
});

Cypress.Commands.add('resetJackpots', () => {
  cy.log('Resetting mock jackpots');
  cy.window().then((win) => {
    win.localStorage.setItem('jackpots', JSON.stringify([
      { game: 'Mega Slot', amount: 5000 },
      { game: 'Super Spin', amount: 10000 },
    ]));
  });
});

Cypress.Commands.add('resetPromos', () => {
  cy.log('Resetting mock promotions');
  cy.window().then((win) => {
    win.localStorage.setItem('promos', JSON.stringify([
      { name: 'Free Spins', active: true },
      { name: 'Cashback', active: true },
    ]));
  });
});

Cypress.Commands.add('applyBonus', (code) => {
  cy.log(`Applying bonus ${code}`);
  cy.window().then((win) => {
    const bonuses = JSON.parse(win.localStorage.getItem('bonuses')) || [];
    const user = JSON.parse(win.localStorage.getItem('user')) || {};
    const bonus = bonuses.find(b => b.code === code);

    if (!bonus || bonus.expired) {
      win.localStorage.setItem('bonusError', 'expired');
      return;
    }

    user.balance = (user.balance || 0) + bonus.amount;
    win.localStorage.setItem('user', JSON.stringify(user));
    // Rimuovi il bonus usato
    const remaining = bonuses.filter(b => b.code !== code);
    win.localStorage.setItem('bonuses', JSON.stringify(remaining));
  });
});
