import {test, expect} from '@playwright/test';

exports.LoginPage = class LoginPage {
    constructor(page){
      this.page = page;
      this.loginButton = '#login-button';
      this.errorMessage = page.locator('//h3[@data-test="error"]');   
    }
    async login(username, passsword){
      await this.page.locator('#user-name').fill(username)
      await this.page.locator('#password').fill(passsword)
      await this.page.locator(this.loginButton).click();
    }  
    
  get errorMessageLocator() {
    return this.errorMessage;
  }}

