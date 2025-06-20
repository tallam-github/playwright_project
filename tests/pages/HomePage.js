exports.HomePage = class HomePage {

    constructor(page){
      this.page = page;
      this.productList ='//*[@id="inventory_container"]/div/div/div/div/a';
      this.addToCartbtn = '#add-to-cart-sauce-labs-backpack';
      this.cart = '//a[@class="shopping_cart_link"]';
    } 
  
    async addProductToCart(productName){
        const productList=await this.page.$$(this.productList);
         for(const product of productList){
            if(productName===await product.textContent()){
                await product.click()
                break;
            }
         }
         await this.page.locator(this.addToCartbtn).click();
    }
    async gotoCart(){
        await this.page.locator(this.cart).click();

    }
}