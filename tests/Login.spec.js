// tests/login.test.js
import { test, expect } from '@playwright/test';
import { config } from './config/config.js';
test('Login test using .env values', async ({ page }) => {
    await page.goto(config.baseURL);
    await page.locator('#user-name').fill(config.username)
    await page.locator('#password').fill(config.password)
    await page.locator('#login-button').click();
    console.log("Click on Log in Button is Success...")
    // Verify pageTitle link presence
    const pageTitle=await page.title();
    console.log('Page title is', pageTitle);
    await expect(page).toHaveTitle('Swag Labs');
    console.log("Landing Page is Success...Page Tile is Displayed")
    await page.close
});
