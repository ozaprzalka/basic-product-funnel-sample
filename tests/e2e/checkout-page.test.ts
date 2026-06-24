import { test } from './fixtures'
import { expect } from '@playwright/test';
import { ProductPage } from './pages/product-page';
import { CheckoutPage } from './pages/checkout-page';

test('user clicks the buy now button', async ({ productPage, checkoutPage, page }) => {
  await productPage.goto();
  await productPage.buyNowButton.click();
  await expect(page).toHaveURL(new RegExp(CheckoutPage.url)); 
  await expect(checkoutPage.heading).toBeVisible();
});

test('user fills out checkout form with wrong email', async ({ productPage, checkoutPage, page }) => {
  await productPage.goto();
  await productPage.buyNowButton.click();
  await expect(page).toHaveURL(new RegExp(CheckoutPage.url));
  await checkoutPage.fillForm('John Doe', '123 Main St', 'Anytown');
  await checkoutPage.placeOrderButton.click();
  await expect(checkoutPage.successMessage).not.toBeVisible();
});

test('user fills out checkout form with correct email', async ({ productPage, checkoutPage, page }) => {
  await productPage.goto();
  await productPage.buyNowButton.click();
  await expect(page).toHaveURL(new RegExp(CheckoutPage.url));
  await checkoutPage.fillForm('John Doe', 'test@email.com', '123 Main St');
  await checkoutPage.placeOrderButton.click();
  await expect(checkoutPage.successMessage).toBeVisible();
}); 

test('user clicks back to product button on checkout page', async ({ productPage, checkoutPage, page }) => {
  await productPage.goto();
  await productPage.buyNowButton.click();
  await expect(page).toHaveURL(new RegExp(CheckoutPage.url));
  await checkoutPage.backToProductButton.click();
  await expect(page).toHaveURL(new RegExp(ProductPage.url));
    await expect(productPage.productImage).toBeVisible();
});

test('user sees error message when using invalid email format', async ({ productPage, checkoutPage }) => {
  await productPage.goto();
  await productPage.buyNowButton.click();
  await checkoutPage.fillForm('John Doe', 'a@a', '123 Main St');
  await checkoutPage.placeOrderButton.click();
  await expect(checkoutPage.emailError).toBeVisible();
});

test('user tries to submit empty form', async ({ productPage, checkoutPage }) => {
  await productPage.goto();
  await productPage.buyNowButton.click();
  await checkoutPage.placeOrderButton.click();
  await expect(checkoutPage.successMessage).not.toBeVisible();
});

test('user sees error message when the name is invalid', async ({ productPage, checkoutPage }) => {
  await productPage.goto();
  await productPage.buyNowButton.click();
  await checkoutPage.fillForm('1', 'test@email.com', '123 Main St');
  await checkoutPage.placeOrderButton.click();
  await expect(checkoutPage.fullNameError).toBeVisible();
}); 

test('user sees error message when the address is invalid', async ({ productPage, checkoutPage }) => {
    await productPage.goto();
    await productPage.buyNowButton.click();
    await checkoutPage.fillForm('John Doe', 'test@email.com', '1');
    await checkoutPage.placeOrderButton.click();
    await expect(checkoutPage.addressError).toBeVisible();
  }); 
