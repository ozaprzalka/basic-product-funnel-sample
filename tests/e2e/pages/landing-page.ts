import { type Page, type Locator } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly heroDescription: Locator;
  readonly seeProductButton: Locator;
  readonly exploreFeaturesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', {
      name: /a product funnel that feels clean/i,
    });
    this.heroDescription = page.getByText(/focuslamp/i);
    this.seeProductButton = page.getByRole('link', { name: /see the product/i });
    this.exploreFeaturesButton = page.getByRole('link', { name: /explore features/i });
  }

  async goto() {
    await this.page.goto('/');
  }
  getArticles() {
    return this.page.getByRole('article');
  }
}
