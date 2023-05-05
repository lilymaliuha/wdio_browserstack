import { loggerHelper } from "../../helpers/logger.helper.js";
import { scrollToElementWithText } from "../../helpers/mobile.helper.js";

class CheckoutOverviewPage {

    get finishButton () { return $('~test-FINISH'); }

    async finishPurchase() {
        loggerHelper.info('Click on finish button');

        await scrollToElementWithText("Finish");
        await this.finishButton.click();
    }
}
export default new CheckoutOverviewPage();
