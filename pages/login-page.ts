import { Page, test, expect } from '@playwright/test';

class LoginPage {
  readonly page: Page;
  readonly URL = 'https://workshop-playwright.vercel.app/';

  constructor(page: Page) {
    this.page = page;
  }

  async goToLoginPage() {
    await this.page.goto(this.URL);
  }

  async fillUsername(username: string) {
    await this.page.getByTestId('username-input').fill(username);
  }

  async fillPassword(password: string) {
    await this.page.getByTestId('password-input').fill(password);
  }

  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async clickLogoutButton() {
    await this.page.getByRole('button', { name: 'Log out' }).click();
  }

  async displayLoginPage() {
    await expect(this.page.getByTestId('login-title')).toContainText(
      'Welcome To ODDS| Conference'
    );
  }

  async displayPageTitle() {
    await expect(this.page.getByText('Welcome To ODDS| Conference Playwright Workshop')).toBeVisible();
  }
}

export default LoginPage;
