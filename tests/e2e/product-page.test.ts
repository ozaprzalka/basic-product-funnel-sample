import { test } from './fixtures'
import { expect } from '@playwright/test';

test('user sees the product image', async ({ productPage }) => {
  await productPage.goto();
  await expect(productPage.productImage).toBeVisible();
});

test('user sees the product details', async ({ productPage }) => {
  await productPage.goto();
  await expect(productPage.description).toBeVisible();
  await expect(productPage.description).not.toBeEmpty();
});

test('user sees the product features', async ({ productPage }) => {
  await productPage.goto();
  await expect(productPage.featuresList).toBeVisible();
  await expect(productPage.featuresList).not.toBeEmpty();
  await expect(productPage.getFeatures()).toHaveCount(4);
});

test('user sees the product price', async ({ productPage }) => {
  await productPage.goto();
  await expect(productPage.price).toBeVisible();
  await expect(productPage.price).not.toBeEmpty();
});
