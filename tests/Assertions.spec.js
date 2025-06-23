const {test, expect} = require('@playwright/test');
test('AssertionsTest', async({page})=>{
//open app url
await page.goto('https://www.saucedemo.com/')
//1) Page has a URL => await expect(page).toHaveURL()
await expect(page).toHaveURL('https://www.saucedemo.com/')

//2)Page has a title=> await expect(page).toHaveTitle()
const pageTitle=await page.title();
console.log('Page title is', pageTitle);
await expect(page).toHaveTitle('Swag Labs');
console.log("Landing Page is Success...Page Tile is Displayed")
await page.close

//3)Element is visible => await expect(locator).toBeVisible()
const logoElement=await page.locator('.login_logo');
await expect(logoElement).toBeVisible()
console.log("Landing Page is Success...Logo is Displayed")

//4)Element matches text => await expect(locator).toHaveText()
await expect (await page.locator('//h4[normalize-space()="Accepted usernames are:"]')).toHaveText('Accepted usernames are:')
console.log("Element matches text is Success...")
//5)Element contains text => await expect(locator).toContainText()
await expect (await page.locator('//h4[normalize-space()="Accepted usernames are:"]')).toContainText('Accepted')
console.log("Element contains text is Success...")

//6)Input has a value => await expect(locator).toHaveValue()
const usernameInput=await page.locator('#user-name');
await usernameInput.fill('standard_user');
await expect(usernameInput).toHaveValue('standard_user')
console.log("Input has a value is Success...")

//7)List of elements has given length => expect(locator).toHaveCount()
await page.goto('https://www.saucedemo.com/');
console.log("Launching Application URL=> Is Sucess");
await page.locator('#user-name').fill("standard_user")
console.log("Provide User Name input is Success...")
await page.locator('#password').fill("secret_sauce")
console.log("Provide Password input is Success...")
await page.locator('#login-button').click();
console.log("Click on Log in Button is Success...")
const options = await page.locator('select[class="product_sort_container"] option')
await expect(options).toHaveCount(4)
console.log("List of elements has given length is Success...")

})