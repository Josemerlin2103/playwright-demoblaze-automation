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
2. Run the test: `npx playwright test tests/tests/e2e_purchase_flow.spec.ts --headed`