import {test, expect} from '@playwright/test';
exports.CheckoutPage = class CheckoutPage {

      constructor(page){
        this.page = page;
        this.checkoutButton = '#checkout';
        this.checkoutInfo = page.locator('//span[@class="title"]');
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.zipPostalCodeInput = '#postal-code';
        this.continueButton = '#continue';
        this.checkoutSummaryInfo = page.locator('.summary_info');
        this.finishButton = '#finish';
        this.orderInfo = page.locator('.complete-header');
        this.backHome = '#back-to-products';
           
      }
      async checkout(firstname, lastname, zipcode){
      await this.page.locator(this.checkoutButton).click();
      await expect(this.checkoutInfo).toBeVisible();
      await this.page.locator(this.firstNameInput).fill(firstname);
      await this.page.locator(this.lastNameInput).fill(lastname);
      await this.page.locator(this.zipPostalCodeInput).fill(zipcode);
      await this.page.locator(this.continueButton).click();
      await expect(this.checkoutSummaryInfo).toBeVisible();
      await this.page.locator(this.finishButton).click();
      await expect(this.orderInfo).toBeVisible();
      await this.page.locator(this.backHome).click();
      }}
      