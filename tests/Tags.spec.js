const {test, expect} = require('@playwright/test');
//import {test, expect} from '@playwright/test';
import { LoginPage } from './pages/LoginPage.js';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import {RemoveCartItemPage} from './pages/RemoveCartItemPage';
import { CheckoutPage } from './pages/CheckoutPage';
//#######################################################################################################
//Login Functionality=>Test successful login with valid credentials
//#######################################################################################################
test.describe('Login Test Suite', () => {
test('@Smoke_Test=>1. Login With Valid Credentials' ,async ({page})=>{
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce')
    const pageTitle=await page.title();
    console.log('Page title is', pageTitle);
    await expect(page).toHaveTitle('Swag Labs');
    console.log('1=>This Test=>Login With Valid Credentials=>Validation.....') 
});
//#######################################################################################################
//Login Functionality=>Invalid Credentials=>Test failed login with invalid credentials
//#######################################################################################################
test('@Smoke_Test=>2. Login With Invalid Credentials', async ({page})=>{              
     const login=new LoginPage(page);
     await login.gotoLoginPage();
     await login.login('nonstandard_user', 'secret_sauce');
     await expect(login.errorMessageLocator).toContainText('Username and password do not match any user in this service');
    console.log('2=>This Test=>Login With Invalid Credentials=>Validation.....') 
    });
});
//#######################################################################################################
//Login Functionality=>Test successful login with valid credentials
//#######################################################################################################
test.describe('Login Test Suite', () => {
test('@Regression_Test=>1. Login With Valid Credentials' ,async ({page})=>{
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce')
    const pageTitle=await page.title();
    console.log('Page title is', pageTitle);
    await expect(page).toHaveTitle('Swag Labs');
    console.log('1=>This Test=>Login With Valid Credentials.....')
});
//#######################################################################################################
//Login Functionality=>Invalid Credentials=>Test failed login with invalid credentials
//#######################################################################################################
test('@Regression_Test=>2. Login With Invalid Credentials', async ({page})=>{              
     const login=new LoginPage(page);
     await login.gotoLoginPage();
     await login.login('nonstandard_user', 'secret_sauce');
     await expect(login.errorMessageLocator).toContainText('Username and password do not match any user in this service');
     console.log('2=>This Test=>Login With Invalid Credentials=>Validation.....')
   });  
});
//#######################################################################################################
//Home Page=>Products List=>Verify that a user can view a list of products
//#######################################################################################################
test.describe('Products List Test Suite', () => {
test('@Regression_Test=>3. Home Page=>Products List=>Validation', async ({page})=>{
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce')
    const home=new HomePage(page);
    await home.addProductToCart("Sauce Labs Backpack'")
    await home.gotoCart();
    console.log('3=>This Test=>Home Page=>Products List=>Verify that a user can view a list of products=>Validation......')
    });      
});
//#######################################################################################################
 //Cart Page=>Add an item to the cart and verify it appears in the cart=>Validation
//####################################################################################################### 
test.describe('Cart Page Test Suite', () => {
test('@Regression_Test=>4. Cart Page=>Cart Items=>Validation', async ({page})=>{
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce')
    const home=new HomePage(page);
    await home.addProductToCart("Sauce Labs Backpack'")
    await home.gotoCart();
    const cart=new CartPage(page);
    const status=await cart.checkProductInCart('Sauce Labs Backpack')
    expect(await status).toBe(true);
    console.log('4=>This Test=>Cart Page=>Add an item to the cart and verify it appears in the cart=>Validation......')
   });
}); 
//#######################################################################################################
  //Cart Item Page=>Remove=>Remove an item from the cart and verify it is removed=>Validation
//####################################################################################################### 
test.describe('Cart Item Remove Test Suite', () => {
test('@Regression_Test=>5. Cart Item Page=>Remove=>Validation', async ({page})=>{
//Cart Item Page=>Remove=>Remove an item from the cart and verify it is removed=>Validation
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce')
    const home=new HomePage(page);
    await home.addProductToCart("Sauce Labs Backpack'")
    await home.gotoCart();
    const cart=new CartPage(page);
    const status=await cart.checkProductInCart('Sauce Labs Backpack')
    expect(await status).toBe(true);
    const removecart=new RemoveCartItemPage(page);
    await removecart.removeCartItem();
    const removeditem=new RemoveCartItemPage(page);
    await removeditem.isItemInCart();
    expect(await status).toBe(true);
    console.log('5=>This Test=>Cart Item Page=>Remove=>Remove an item from the cart and verify it is removed=>Validation......')
    });     
});
 //#######################################################################################################
 //Checkout Page=>Order Confirmation=>Validation
//####################################################################################################### 
test.describe('Checkout Order Test Suite', () => {
test('@Regression_Test=>6. Checkout Page=>Order Confirmation=>Validation', async ({page})=>{
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce')
    const home=new HomePage(page);
    await home.addProductToCart("Sauce Labs Backpack'")
    await home.gotoCart();
    const cart=new CartPage(page);
    const status=await cart.checkProductInCart('Sauce Labs Backpack')
    expect(await status).toBe(true);
    const checkout=new CheckoutPage(page);
    await checkout.checkout('John', 'Doe','12345')
    const pageTitle=await page.title();
    console.log('Page title is', pageTitle);
    await expect(page).toHaveTitle('Swag Labs');
    console.log('6=>This Test=>Checkout Page=>Order Confirmation=>Validation......')
    });    
});
