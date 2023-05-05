class BaseHeaderModule {

    get openCartButton () { return $('~test-Cart'); }

    async openCart() {
        await this.openCartButton.click();
    }

}
export default new BaseHeaderModule();
