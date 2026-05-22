import { test, expect } from '@playwright/test';

test('user loads the remote landing page', async ({ page }) => {
  await page.goto('https://eeglobal.github.io/basic-product-funnel-sample/');

  await expect(
    page.getByRole('heading', {
      name: /a product funnel that feels clean, focused, and easy to buy from/i,
    }),
  ).toBeVisible();
});
