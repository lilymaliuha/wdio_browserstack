import { loggerHelper } from "../../helpers/logger.helper.js";

class CheckoutInformationPage {

    get firstNameInput () { return $('~test-First Name'); }
    get lastNameInput () { return $('~test-Last Name'); }
    get postalCodeInput () { return $('~test-Zip/Postal Code'); }
    get continueButton () { return $('~test-CONTINUE'); }

    async enterCheckoutInfoAndContinue(firstName, lastName, postalCode) {
        loggerHelper.info('Enter checkout information and press continue');

        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
        await this.continueButton.click();
    }

}
export default new CheckoutInformationPage();
