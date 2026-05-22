import { test, expect } from '@playwright/test';

test('user loads the landing page', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: /a product funnel that feels clean, focused, and easy to buy from/i,
    }),
  ).toBeVisible();
});
