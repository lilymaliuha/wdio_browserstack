class ProductsPage {

    get addProductToCartButton () { return $$('~test-ADD TO CART'); }
    // const addProductToCartButton = $$('~test-ADD TO CART');

    async addProductToCartByIndex() {
        // const addProductToCartButton = $$('~test-ADD TO CART');
        await $$('~test-ADD TO CART')[0].click();
        // await this.addProductToCartButton[0].waitForExist();
        // await this.addProductToCartButton.find('')
    }

}
export default new ProductsPage();
