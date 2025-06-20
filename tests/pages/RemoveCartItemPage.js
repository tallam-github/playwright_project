import {test, expect} from '@playwright/test';
exports.RemoveCartItemPage = class RemoveCartItemPage {

    constructor(page){
      this.page = page;
      this.removeButton = '//button[contains(text(),"Remove")]';
      this.removedItem = page.locator('//div[@class="removed_cart_item]');   
    }
    async removeCartItem(){
    await this.page.locator(this.removeButton).click();
}
    async isItemInCart() {
    return this.removedItem;
  }}