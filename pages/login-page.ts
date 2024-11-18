import { Page, test, expect, Locator } from '@playwright/test';

class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly URL = 'https://workshop-playwright.vercel.app/';

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.getByTestId('username-input');
    this.passwordInput = this.page.getByTestId('password-input');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
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

  async loginWithUsernamePassword() {
    await this.fillUsername('BomScoob');
    await this.fillPassword('password');
    await this.clickLoginButton();
  }

  async loginWithUsernameWithoutPassword() {
    await this.fillUsername('BomScoob');
    await this.clickLoginButton();
  }

  async expectDisplayLoginPage() {
    await expect(this.page.getByTestId('login-title')).toContainText(
      'Welcome To ODDS| Conference'
    );
  }

  async expectDisplayPasswordRequiredMessage() {
    await expect(this.page.getByText('Password is required')).toBeVisible();
  }

}

export default LoginPage;
