const {test, expect} = require('@playwright/test');

test('Home Page',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    const pageTitle=await page.title();
    console.log('Page title is', pageTitle);
    await expect(page).toHaveTitle('Swag Labs');
})