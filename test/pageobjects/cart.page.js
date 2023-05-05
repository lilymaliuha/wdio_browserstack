import { loggerHelper } from "../../helpers/logger.helper.js";

class CartPage {

    get checkoutButton () { return $('~test-CHECKOUT'); }

    async goToCheckout() {
        loggerHelper.info('Press checkout button');

        await this.checkoutButton.click();
    }

}
export default new CartPage();
