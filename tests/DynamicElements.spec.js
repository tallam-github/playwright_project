
const { test, expect } = require('@playwright/test');
const BasePage = require('./pages/BasePage')

  test('Login with explicit waits', async ({ page }) => {
        const basePage = new BasePage(page);
        await page.goto('https://www.saucedemo.com/');
        await basePage.waitForPageToLoad(); // Explicit wait for page load
        const pageTitle=await page.title();
        console.log('Page title is', pageTitle);
        await expect(page).toHaveTitle('Swag Labs');
        await page.getByText("//button[normalize-space()='Log in']") 
        
   });
  
  

