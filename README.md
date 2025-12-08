#Cypress iGaming Demo

QA Automation Demo for iGaming Platforms – Casino & Gaming Web Applications.
Demonstrates end-to-end, API, and automation testing with Cypress and Playwright, following best QA practices.

---

🚀 Overview

This project showcases automation and testing capabilities for gaming platforms. It simulates player journeys, validates APIs, and demonstrates integration with CI/CD workflows. Ideal for demonstrating QA skills for positions in Gaming Experience teams.

Key Features:

End-to-end tests with Cypress

API testing with Cypress & Postman

Basic automation with Playwright

BDD-style test scenarios (Cucumber optional)

CI/CD integration example with GitHub Actions

14 tests implemented across SessionsAPI, AccountsAPI, and CoreAPI

---

🧰 Tech Stack

Cypress – End-to-end testing

Playwright – Browser automation

JavaScript / TypeScript

BDD – Cucumber for structured test scenarios

Postman – API testing

GitHub Actions / Jenkins – CI/CD pipelines

---

📂 Project Structure

cypress-igaming-demo/
├─ cypress/
│ ├─ e2e/ # End-to-end test scripts
│ │ ├─ SessionsAPI/ → 4 tests: login, logout, service ticket, session flow
│ │ ├─ AccountsAPI/ → 4 tests: account info, flags, payments, plus card
│ │ └─ CoreAPI/ → 6 tests: balance, bonus, games, jackpot, promo, tickets
│ ├─ fixtures/ # Test data
│ ├─ support/ # Commands and helpers
├─ package.json # Project dependencies
├─ README.md # Project documentation
├─ cypress.config.js # Cypress configuration
├─ docs/ # Optional: manual test plans, checklists

---

⚡ Highlights
Automated Testing

Player journey simulations: login, lobby navigation, balance checks

Form validations and UI interactions

Reusable Cypress commands

API Testing

GET, POST, and DELETE endpoints validation

Response schema and status code assertions

Fully based on Mock API collections

CI/CD Integration

GitHub Actions workflow for running tests on push

Headless test execution for automated pipelines

BDD & Playwright

Example BDD scenario using Cucumber

Playwright automation scripts for browser testing

Reporting

Screenshots of test results (cypress/screenshots/)

HTML/JSON reports for CI/CD (cypress/reports/)

---

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

# Run Playwright tests (if included)
npx playwright test

----

📈 Example Tests
E2E Player Flow: login → play → check balance → logout

API Validation: endpoint response validation, status codes

BDD Scenario: feature: “Player can make a deposit”

---

📑 Documentation
Optional documentation can be found in the docs/ folder:

manual_tests.md – Manual test cases

checklists.md – QA checklists

api_tests.md – API test scenarios

---

👤 Author
Marco Lo Bianco – QA Engineer
LinkedIn: https://www.linkedin.com/in/marco-lo-bianco-869311b1/
[🔗]([url](https://github.com/marcolob/cypress-igaming-demo)) Live Repository
