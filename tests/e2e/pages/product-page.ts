import { type Page, type Locator } from '@playwright/test';

export class ProductPage {
  static readonly url = '/product';
  readonly page: Page;
  readonly heading: Locator;
  readonly price: Locator;
  readonly description: Locator;
  readonly featuresList: Locator;
  readonly buyNowButton: Locator;
  readonly backButton: Locator;
  readonly backToLandingButton: Locator;
  readonly productImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: /focuslamp/i });
    this.price = page.getByText(/€79\.00/);
    this.description = page.getByText(/designed to help you concentrate/i);
    this.featuresList = page.getByRole('list');
    this.buyNowButton = page.getByRole('link', { name: /buy now/i });
    this.backButton = page.getByRole('link', { name: /^back$/i });
    this.backToLandingButton = page.getByRole('link', { name: /back to the landing page/i });
    this.productImage = page.getByRole('img');
  }

  async goto() {
    await this.page.goto('/product');
  }
  getFeatures() {
    return this.featuresList.getByRole('listitem');
  }
}
