class CheckoutCompleteModule {

    get completeHeaderLabel () { return $('~test-THANK YOU FOR YOU ORDER'); }
    get backHomeButton () { return $('~test-BACK HOME'); }

    async isCompleteHeaderDisplayed() {
        return this.completeHeaderLabel.isDisplayed();
    }
}
export default new CheckoutCompleteModule();

