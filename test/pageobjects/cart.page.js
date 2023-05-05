class CartPage {

    get checkoutButton () { return $('~test-CHECKOUT'); }

    async goToCheckout() {
        await this.checkoutButton.click();
    }

}
export default new CartPage();
