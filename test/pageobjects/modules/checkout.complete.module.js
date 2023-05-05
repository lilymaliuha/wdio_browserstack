import { loggerHelper } from "../../../helpers/logger.helper.js";

class CheckoutCompleteModule {

    get completeHeaderLabel () { return $('~test-THANK YOU FOR YOU ORDER'); }
    get backHomeButton () { return $('~test-BACK HOME'); }

    async isCompleteHeaderDisplayed() {
        loggerHelper.info('Check if complete header is displayed after completing the order');

        return this.completeHeaderLabel.isDisplayed();
    }
}
export default new CheckoutCompleteModule();

