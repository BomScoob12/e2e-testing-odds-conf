import { Page, test, expect, Locator } from '@playwright/test';

class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;
  readonly URL = 'https://workshop-playwright.vercel.app/';

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.getByTestId('username-input');
    this.passwordInput = this.page.getByTestId('password-input');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    this.logoutButton = this.page.getByRole('button', { name: 'Log out' });
  }

  async goToLoginPage() {
    await this.page.goto(this.URL);
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  async displayLoginPage() {
    await expect(this.page.getByTestId('login-title')).toContainText(
      'Welcome To ODDS| Conference'
    );
  }

  async displayPageTitle() {
    await expect(
      this.page.getByText('Welcome To ODDS| Conference Playwright Workshop')
    ).toBeVisible();
  }
}

export default LoginPage;
