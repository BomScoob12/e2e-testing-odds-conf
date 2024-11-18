import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login-page';

test.describe('User login', async () => {
  test('login success', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.displayLoginPage();
    await loginPage.loginWithUsernamePassword();
    await loginPage.displayPageTitle();
  });

});

// test('login passed test', async ({ page }) => {
//   await page.goto('https://workshop-playwright.vercel.app/');
//   await page.getByTestId('username-input').fill('BomScoob');
//   await page.getByTestId('password-input').fill('password');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByText('Welcome To ODDS| Conference Playwright Workshop')).toBeVisible();
//   await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();
// });

// test('Login failed test', async ({page}) => {
//     await page.goto('https://workshop-playwright.vercel.app/');
//     await page.getByTestId('username-input').fill('BomScoob');
//     await page.getByRole('button', { name: 'Login' }).click();

//     await expect(page.getByText('Password is required')).toBeVisible();
// });
