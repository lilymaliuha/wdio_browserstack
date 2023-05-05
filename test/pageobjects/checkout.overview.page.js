class CheckoutOverviewPage {

    get finishButton () { return $('~test-FINISH'); }

    async finishPurchase() {
        const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Finish"))`;
        await $(`android=${bottomElementSelector}`);
        await this.finishButton.click();
    }

}
export default new CheckoutOverviewPage();
