import { Page, test, expect, Locator } from '@playwright/test';

class HomePage {
  readonly page: Page;
  readonly titleHomePage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = this.page.getByRole('button', { name: 'Log out' });
    this.titleHomePage = this.page.getByText(
      'Welcome To ODDS| Conference Playwright Workshop'
    );
  }

  async expectDisplayHomePage() {
    await expect(this.titleHomePage).toBeVisible();
  }

  async expectDisplayLogoutButton() {
    await expect(this.logoutButton).toBeVisible();
  }
}

export default HomePage;
