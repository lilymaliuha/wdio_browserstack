import { loggerHelper } from "../../helpers/logger.helper.js";

class ProductsPage {

    get firstAddProductToCartButton () { return $$('~test-ADD TO CART')[0]; }

    async addFirstProductToCart() {
        loggerHelper.info(`Add first product to cart`);

        await this.firstAddProductToCartButton.waitForDisplayed();
        await this.firstAddProductToCartButton.click();
    }

}
export default new ProductsPage();
