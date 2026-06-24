import { type Page, type Locator } from '@playwright/test';

export class CheckoutPage {
  static readonly url = '/checkout';
  readonly page: Page;
  readonly heading: Locator;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly addressInput: Locator;
  readonly placeOrderButton: Locator;
  readonly backToProductButton: Locator;
  readonly successMessage: Locator;
  readonly fullNameError: Locator;
  readonly emailError: Locator;
  readonly addressError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: /complete your order/i });
    this.fullNameInput = page.getByLabel('Full name');
    this.emailInput = page.getByLabel('Email');
    this.addressInput = page.getByLabel('Shipping address');
    this.placeOrderButton = page.getByRole('button', { name: /place order/i });
    this.backToProductButton = page.getByRole('link', { name: /back to product/i });
    this.successMessage = page.getByText(/Order placed successfully/i);
    this.fullNameError = page.getByText(/the full name is required/i);
    this.emailError = page.getByText(/invalid email/i);
    this.addressError = page.getByText(/the address is required/i);
  }

  async goto() {
    await this.page.goto('/checkout');
  }

  async fillForm(fullName: string, email: string, address: string) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.addressInput.fill(address);
  }

}
