![Playwright Tests](https://github.com/Josemerlin2103/playwright-demoblaze-automation/actions/workflows/playwright.yml/badge.svg)
# Playwright E2E Automation - Demoblaze

A professional automation framework built using **Playwright** and **TypeScript** to test the Demoblaze e-commerce platform.

## 🚀 Key Features
- **Page Object Model (POM)**: Organized code structure for better maintainability.
- **Data-Driven Testing**: Test inputs are managed via `testData.json`.
- **Advanced Assertions**: Reliable flows using Playwright's auto-waiting and locator logic.

## 🛠️ Tech Stack
- **Language**: TypeScript
- **Framework**: Playwright
- **Pattern**: Page Object Model (POM)

## 📖 How to Run

1. Install dependencies: `npm install`

2. Install Playwright browsers: `npx playwright install`

3. Run all tests: `npx playwright test`

4. Run the E2E purchase flow: `npx playwright test tests/tests/e2e_purchase_flow.spec.ts`

5. Run tests in headed mode: `npx playwright test --headed`

6. View the HTML report: `npx playwright show-report`