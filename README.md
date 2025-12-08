Cypress iGaming Demo

QA Automation Demo for iGaming Platforms – Casino & Gaming Web Applications.
Demonstrates end-to-end, API, and automation testing with Cypress and Playwright, following best QA practices.

🚀 Overview

This project showcases automation and testing capabilities for gaming platforms. It simulates player journeys, validates APIs, and demonstrates integration with CI/CD workflows. Ideal for demonstrating QA skills for positions in Gaming Experience teams.

Key Features:

End-to-end tests with Cypress

API testing with Cypress

Mock API integration for Sessions, Accounts, and Core modules

CI/CD integration example with GitHub Actions

🧰 Tech Stack

Cypress – End-to-end and API testing

Playwright – Browser automation (optional)

JavaScript / TypeScript

BDD – Optional structured test scenarios

GitHub Actions / Jenkins – CI/CD pipelines

📂 Project Structure
cypress-igaming-demo/
├─ cypress/
│  ├─ e2e/
│  │  ├─ SessionsAPI/     → 4 test
│  │  ├─ AccountsAPI/     → 4 test
│  │  └─ CoreAPI/         → 6 test
│  ├─ fixtures/           → test data
│  ├─ support/            → commands/helpers
├─ package.json
├─ cypress.config.js
├─ README.md
├─ docs/                 → Optional manual test plans

⚡ Highlights
Automated Testing

Player journey simulations: login → check session → logout

Account validation: account info, flags, payments, plus card

Core API verification: balance, bonus, games, jackpot, promo, tickets

Reusable Cypress commands across modules

API Testing

GET, POST, and DELETE endpoints

Response schema and status code assertions

Tests fully based on Mock API collections

14 tests currently implemented:

SessionsAPI (4): login, logout, service ticket check, integrated session flow

AccountsAPI (4): account info, account flags, payments, plus card

CoreAPI (6): balance, bonus, games, jackpot, promo, tickets

CI/CD Integration

GitHub Actions workflow runs tests automatically on push

Headless test execution for pipelines

Reporting

Screenshots of test results (cypress/screenshots/)

HTML/JSON reports for CI/CD (cypress/reports/)

💻 Getting Started
# Clone the repository
git clone https://github.com/marcolob/cypress-igaming-demo.git
cd cypress-igaming-demo

# Install dependencies
npm install

# Open Cypress Test Runner (GUI)
npx cypress open

# Or run headless tests
npx cypress run

# Optional: Run Playwright tests (if included)
npx playwright test

📑 Documentation

Optional documentation can be found in the docs/ folder:

manual_tests.md – Manual test cases

checklists.md – QA checklists

api_tests.md – API test scenarios

👤 Author

Marco Lo Bianco – QA Engineer
LinkedIn: https://www.linkedin.com/in/marco-lo-bianco-869311b1/
🔗 Live Repository
