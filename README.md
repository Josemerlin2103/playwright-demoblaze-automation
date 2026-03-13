# Playwright DemoBlaze Automation

End-to-End automation framework built using **Playwright + TypeScript** for the DemoBlaze e-commerce demo site.

## 🔧 Tech Stack
- **Playwright**: Core automation engine.
- **TypeScript**: Typed language for better code reliability.
- **Page Object Model (POM)**: For maintainable and scalable test architecture.
- **Node.js**: Execution environment.

## 📁 Project Structure
- `pages/`: Contains page classes with locators and actions (POM).
- `tests/`: Contains the actual test scripts (Login, Add to Cart, etc.).
- `utils/`: Reusable helper functions and constants.
- `playwright.config.ts`: Main configuration for browsers and environments.

## 🚀 Getting Started
1. Clone the repo
2. Run `npm install`
3. Execute tests with: `npx playwright test`