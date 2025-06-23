    
    import {test, expect} from '@playwright/test';
    import { LoginPage } from './pages/LoginPage.js';
    import { HomePage } from './pages/HomePage';
    import { CartPage } from './pages/CartPage';
    import {RemoveCartItemPage} from './pages/RemoveCartItemPage';
    import { CheckoutPage } from './pages/CheckoutPage';
    import { config } from './config/config';

        test.describe('Login Test Suite', () => {
       
        test('1=>Login With Valid Credentials', async ({page})=>{
        //Login Functionality=>Valid Credentials=>Test successful login with valid credentials
            const login = new LoginPage(page);
            await page.goto(config.baseURL);
            await login.login(config.username, config.password)
            const pageTitle=await page.title();
            console.log('Page title is', pageTitle);
            await expect(page).toHaveTitle('Swag Labs');
        });

        test('2=>Login With Invalid Credentials', async ({page})=>{
            //Login Functionality=>Invalid Credentials=>Test failed login with invalid credentials
            const login=new LoginPage(page);
            await page.goto(config.baseURL);
            await login.login(config.invalidusername, config.password)
            await expect(login.errorMessageLocator).toContainText('Username and password do not match any user in this service');
    });   
     });  
        test.describe('Products List Test Suite', () => {
        test('3=>Home Page=>Products List=>Validation', async ({page})=>{
        //Home Page=>Products List=>Verify that a user can view a list of products.
            const login=new LoginPage(page);
            await page.goto(config.baseURL);
            await login.login(config.username, config.password)
            const home=new HomePage(page);
            await home.addProductToCart("Sauce Labs Backpack'")
            await home.gotoCart();
        });      
    }); 
        test.describe('Cart Page Test Suite', () => {
        test('4=>Cart Page=>Cart Items=>Validation', async ({page})=>{
        //Cart Page=>Add an item to the cart and verify it appears in the cart=>Validation
            const login=new LoginPage(page);
            await page.goto(config.baseURL);
            await login.login(config.username, config.password)
            const home=new HomePage(page);
            await home.addProductToCart("Sauce Labs Backpack'")
            await home.gotoCart();
            const cart=new CartPage(page);
            const status=await cart.checkProductInCart('Sauce Labs Backpack')
            expect(await status).toBe(true);
        });
    }); 
        test.describe('Cart Item Remove Test Suite', () => {
        test('5=>Cart Item Page=>Remove=>Validation', async ({page})=>{
        //Cart Item Page=>Remove=>Remove an item from the cart and verify it is removed=>Validation
            const login=new LoginPage(page);
            await page.goto(config.baseURL);
            await login.login(config.username, config.password)
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
        });     
    });
         test.describe('Checkout Order Test Suite', () => {
         test('6=>Checkout Page=>Order Confirmation=>Validation', async ({page})=>{
        //Checkout Page=>Order Confirmation=>Validation
            const login=new LoginPage(page);
            await page.goto(config.baseURL);
            await login.login(config.username, config.password)
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
        });    
    });