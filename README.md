# Basic product funnel sample

## 📚 Tech stack

[![TypeScript](https://img.shields.io/badge/-typescript-gray?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/-react-gray?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/-tailwindcss-gray?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/-nodejs-gray?style=flat&logo=nodedotjs)](https://nodejs.org/)
[![Prettier](https://img.shields.io/badge/-prettier-gray?style=flat&logo=prettier)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/-eslint-gray?style=flat&logo=eslint&logoColor=4b32c3)](https://eslint.org/)
[![Vite.js](https://img.shields.io/badge/-vite-gray?style=flat&logo=vite)](https://vite.dev/)
[![Vitest](https://img.shields.io/badge/-vitest-gray?style=flat&logo=vitest)](https://vitest.dev/)
[![Playwright](https://custom-icon-badges.demolab.com/badge/Playwright-gray?logo=playwright&logoColor=fff)](https://playwright.dev/)

## 🏗️ Project setup

1. `git clone ...` it locally

2. `npm i` to install the project dependencies

3. `npx playwright install chromium --with-deps` to install the playwright Chromium browser

- more information at [Installation | Playwright Docs](https://playwright.dev/docs/intro)

## 💻 Commands

- start the development: `npm start` or `npm run dev`

- run the Vitest tests: `npm test`
  - `npm run test:samples` - tests localed at `tests/samples/`
  - `npm run test:integration` - tests located at `tests/integration/`
  - `npm run test:src` - tests located at `src/`

- run the Playwright tests: `npm run test:e2e`
  - tests located at `tests/e2e/`

  - to control and see the tests execution use the command: `npm run test:e2e-ui`
    - [Running and debugging tests | Playwright Docs](https://playwright.dev/docs/running-tests)

## 📝 TODO

Define e2e tests to cover the full flow of the basic product funnel sample

The funnel is composed by:

1. Landing Page
2. Product Details Page
3. Checkout Page
   - it contains a simple form with a basic fill up validation
     - the tests should check the wrong values at the form
   - once the form validation pass, it will display a success message below the buttons

Those tests should be defined at `tests/e2e` directory

Command to run the e2e tests: `npm run test:e2e`

## 🔖 Useful references

- [TypeScript](https://www.typescriptlang.org/)

- [Tailwind CSS](https://tailwindcss.com/)
  - [Styling with utility classes](https://tailwindcss.com/docs/styling-with-utility-classes)

- [React](https://react.dev/)

- [React Router](https://reactrouter.com/)
  - [BrowserRouter basename](https://reactrouter.com/api/declarative-routers/BrowserRouter#basename)

  - [Optimizing Performance with Lazy Loading in React Router v6 | Dev.to](https://dev.to/abhay_yt_52a8e72b213be229/optimizing-performance-with-lazy-loading-in-react-router-v6-3m5p)

  - [Lazy Loading Routes with Vite and React Router v7 | Thomas Schoffelen](https://schof.co/lazy-loading-routes-with-vite-and-react-router-v7/)

  - [Custom Github Pages 404 Page with React Router | Noah Tigner](https://noahtigner.com/articles/github-pages-404-react-router/)

- [React Hook Form](https://www.react-hook-form.com/)
  - [Custom Hook with Resolver](https://www.react-hook-form.com/advanced-usage/#CustomHookwithResolver)

  - [API > useForm > resolver](https://www.react-hook-form.com/api/useform/#resolver)
    - [Zod reolver](https://github.com/react-hook-form/resolvers#zod)

  - [Form Validation in React with Zod and React Hook Form | NashTech Blog](https://blog.nashtechglobal.com/form-validation-in-react-with-zod-and-react-hook-form/) (2025/07/01)

  - [Integrating Zod for Form Validation in React | Till it's done](https://tillitsdone.com/en/blogs/zod-form-validation-in-react/)

  - [Promise-returning function provided to attribute where a void return was expected. · react-hook-form · Discussion #8622](https://github.com/orgs/react-hook-form/discussions/8622)

- [Zod](https://zod.dev/)
  - [6 Zod Schema Patterns to Make Your Input Validation 10x More Robust | by Jakub Radzik - Medium]() (2026/02/15)

- [Vitest](https://vitest.dev/)
  - [Getting Started | Guide - Vitest](https://vitest.dev/guide/)

  - [Configuring Vitest | Vitest](https://vitest.dev/config/)

  - [Writing Tests | Guide - Vitest](https://vitest.dev/guide/learn/writing-tests.html)

- [Testing Library](https://testing-library.com/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

  - [How to use act vs waitFor using React Testing Library | Swift Discovery](https://onmyway133.com/posts/how-to-use-act-vs-waitfor-using-react-testing-library/)

  - [Common mistakes with React Testing Library | Kent C. Dodds](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

  - [Setting Up Vitest + React Testing Library | Dev.to](https://dev.to/sheikhlimon/setting-up-vitest-react-testing-library-jj)

- [Playwright](https://playwright.dev/)
  - [Writing tests](https://playwright.dev/docs/writing-tests)

  - [Setting up CI](https://playwright.dev/docs/ci-intro)
    - [[Question]: How to cache on github actions? · Issue #7249 · microsoft/playwright](https://github.com/microsoft/playwright/issues/7249#issuecomment-1385567519)

  - [Build your first end-to-end test with Playwright - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/)

  - [[GitHub] mxschmitt/try-playwright](https://github.com/mxschmitt/try-playwright) - Try Playwright lets you execute and share Playwright scripts in your browser to get started with Playwright.
    - [Example that checks the page title of `eeglobal.github.io/basic-product-funnel-sample`](https://try.playwright.tech/?l=playwright-test&s=pb9mt4o)

  - [Getting Started with Playwright: A Step-by-Step Guide | Dev.to](https://dev.to/aswani25/getting-started-with-playwright-a-step-by-step-guide-479j)

  - [17 Playwright Best Practices That Actually Matter (With Code) | TestDino Blog](https://testdino.com/blog/playwright-best-practices)

  - [Creating testable React applications with Playwright | Refine](https://refine.dev/blog/playwright-react/)
