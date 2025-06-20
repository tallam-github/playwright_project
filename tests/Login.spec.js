const {test, expect} = require('@playwright/test');

test('Login', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    console.log("Launching Application URL=> Is Sucess");
    await page.locator('#user-name').fill("standard_user")
    console.log("Provide User Name input is Success...")
    await page.locator('#password').fill("secret_sauce")
    console.log("Provide Password input is Success...")
    // Click on login button
    await page.locator('#login-button').click();
    console.log("Click on Log in Button is Success...")
    // Verify pageTitle link presence
    const pageTitle=await page.title();
    console.log('Page title is', pageTitle);
    await expect(page).toHaveTitle('Swag Labs');
    console.log("Landing Page is Success...Page Tile is Displayed")
    await page.close

})
