import { test } from './fixtures'
import { expect } from '@playwright/test';
import { ProductPage } from './pages/product-page';


test('user loads the landing page', async ({ landingPage }) => {
  await expect(landingPage.heading).toBeVisible();
});

test('user clicks the See the Product button', async ({ landingPage, page }) => {
  await landingPage.seeProductButton.click();
  await expect(page).toHaveURL(new RegExp(ProductPage.url));

});

test('user clicks the Explore Features button', async ({ landingPage, page }) => {
  await landingPage.exploreFeaturesButton.click();
  await expect(page).toHaveURL(new RegExp(`${ProductPage.url}#features`));
}); 

test('user clicks go back button on product page', async ({ landingPage, productPage, page }) => {
  await landingPage.seeProductButton.click();
  await productPage.backButton.click();
  await expect(page).toHaveURL(/.*\//);
});

test('user clicks back to landing page button on product page', async ({ landingPage, productPage, page }) => {
  await landingPage.seeProductButton.click();
  await productPage.backToLandingButton.click();
  await expect(page).toHaveURL(/.*\//);
});

test('user can see the product highlights', async ({ landingPage }) => {
  const articles = landingPage.getArticles();
  await expect(articles).toHaveCount(3);
  for (const article of await articles.all()) {
    const articleText = await article.innerText();
    expect(articleText).not.toBe('');
  }
});
