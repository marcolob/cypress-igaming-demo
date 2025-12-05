# Cypress iGaming Demo

Mini-repo per QA Engineer – Gaming Experience (LeoVegas)

## Features
- BDD-style tests (Given/When/Then) for UI and API
- Page Object Model
- API tests for player balance
- CI/CD ready (GitHub Actions)

## Setup
1. `npm install`
2. `npx cypress open` per aprire l'interfaccia
3. `npm test` per eseguire tutti i test

## Structure
- `cypress/e2e` → test files
- `cypress/support/cartPage.js` → POM
- `.github/workflows/ci.yml` → GitHub Actions demo
