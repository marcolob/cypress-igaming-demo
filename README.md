CYPRESS IGAMING DEMO

QA Automation Demo for iGaming Platforms – Casino & Gaming Web Applications.
Demonstrates end-to-end, API, and automation testing with Cypress, following best QA practices.

---

🚀 OVERVIEW

This project showcases automation and testing capabilities for gaming platforms.
It simulates player journeys, validates APIs, and demonstrates integration with CI/CD workflows.
Ideal for demonstrating QA skills for positions in Gaming Experience or Sportsbook teams.

Key Features:

End-to-end tests with Cypress

API testing with Cypress & Postman

BDD-style test scenarios (Cucumber optional)

CI/CD integration example with GitHub Actions

18+ automated tests (SessionsAPI, AccountsAPI, CoreAPI, BetsAPI, SportDataAPI)

Fully based on Mock API collections (Mockoon)

---

🧰 TECH STACK

Cypress – End-to-end testing

JavaScript

Postman – API testing

Mockoon – API mock server

Example mocks used:

WHAPI Com Bets → https://mockoon.com/mock-samples/whapicom-bets/

WHAPI SportsData → https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/whapicom-sportsdata.json

GitHub Actions – CI/CD pipelines

Playwright – Optional automation

---

📂 PROJECT STRUCTURE
cypress-igaming-demo/
├─ cypress/
│  ├─ e2e/
│  │  ├─ SessionsAPI/     → 4 tests
│  │  ├─ AccountsAPI/     → 4 tests
│  │  ├─ CoreAPI/         → 9 tests
│  │  ├─ BetsAPI/         → 2 tests
│  │  └─ SportDataAPI/    → NEW: competitions, seasons, events
│  ├─ fixtures/
│  ├─ support/
├─ package.json
├─ README.md
├─ cypress.config.js
└─ docs/

---

⚡ HIGHLIGHTS
Automated Testing

Player journey simulations

UI interactions, balance checks, game flow

Reusable Cypress commands

Parametric tests

API Testing

Status codes & schema validation

Negative testing (400, 404, 409)

Fully aligned to Mockoon responses

Includes SportDataAPI: competitions → seasons → events

CI/CD Integration

GitHub Actions workflow

Headless test execution

Automated pipelines

---

💻 GETTING STARTED
 Clone the repository
git clone https://github.com/marcolob/cypress-igaming-demo.git
cd cypress-igaming-demo

 Install dependencies
npm install

 Open Cypress Test Runner
npx cypress open

 Run headless tests
npx cypress run

---

📈 EXAMPLE TESTS

Login → browse → play → balance → logout

Validate session ticket

Retrieve competitions, seasons, events

Validate schema, error handling, status codes

BDD examples (optional)

---

📑 DOCUMENTATION

Inside the docs/ folder:

manual_tests.md

checklists.md

api_tests.md

---

👤 AUTHOR

Marco Lo Bianco – QA Engineer

Automation | iGaming | API | CI/CD
