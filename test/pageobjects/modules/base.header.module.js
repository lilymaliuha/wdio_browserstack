import { loggerHelper } from "../../../helpers/logger.helper.js";

class BaseHeaderModule {

    get openCartButton () { return $('~test-Cart'); }

    async openCart() {
        loggerHelper.info('Open cart');

        await this.openCartButton.click();
    }

}
export default new BaseHeaderModule();
