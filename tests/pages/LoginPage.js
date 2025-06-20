import {test, expect} from '@playwright/test';
//import { config } from './config/config';

exports.LoginPage = class LoginPage {
    constructor(page){
      this.page = page;
      this.usernameInput = '#user-name';
      this.passwordInput = '#password';
      this.loginButton = '#login-button';
      this.errorMessage = page.locator('//h3[@data-test="error"]');   
    }
    async gotoLoginPage(){
      //await this.page.goto('${config.baseURL}/');
        await this.page.goto('/');
    }

    async login(username, passsword){
     await this.page.locator(this.usernameInput).fill(username);
     await this.page.locator(this.passwordInput).fill(passsword);
     await this.page.locator(this.loginButton).click();
    }

/*
    async login() {
    await this.usernameInput.fill(config.username);
    await this.passwordInput.fill(config.password);
    await this.loginButton.click();
  }
  */ 
  get errorMessageLocator() {
    return this.errorMessage;
  }}

