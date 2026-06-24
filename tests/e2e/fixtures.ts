/* eslint-disable react-hooks/rules-of-hooks */
import { test as base } from '@playwright/test';
import { LandingPage } from './pages/landing-page';
import { CheckoutPage } from './pages/checkout-page';
import { ProductPage } from './pages/product-page';

type Fixtures = {
  landingPage: LandingPage;
  checkoutPage: CheckoutPage;
  productPage: ProductPage;
};

export const test = base.extend<Fixtures>({
  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await landingPage.goto();
    await use(landingPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
});

