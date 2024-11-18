import { Page, test, expect } from '@playwright/test';

class LoginPage {
    readonly page: Page;

    async goToLoginPage() {
        await this.page.goto('https://workshop-playwright.vercel.app/');
    }

    async fillUsername(username: string = "BomScoob") {
        await this.page.fill('[data-testid=username-input]', username);
    }

    async fillPassword(password: string = "password") {
        await this.page.fill('[data-testid=password-input]', password);
    }

    async clickLoginButton() {
        await this.page.getByRole('button', { name: 'Login'}).click();
    }

    async clickLogoutButton() {
        await this.page.getByRole('button', { name: 'Log out'}).click();
    }
}