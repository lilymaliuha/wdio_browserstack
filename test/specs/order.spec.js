import LoginPage from "../pageobjects/login.page.js";
import ProductsPage from "../pageobjects/products.page.js";
import BaseHeaderModule from "../pageobjects/modules/base.header.module.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutInformationPage from "../pageobjects/checkout.information.page.js";
import CheckoutOverviewPage from "../pageobjects/checkout.overview.page.js";
import CheckoutCompleteModule from "../pageobjects/modules/checkout.complete.module.js";
import { makeRandomString } from "../../helpers/test.data.generator.js";
import * as dotenv from 'dotenv';

dotenv.config();

describe('Order tests', () => {

    it('user should be able to make an order', async () => {
        await LoginPage.login(process.env.APPLICATION_USERNAME, process.env.APPLICATION_PASSWORD);
        await ProductsPage.addFirstProductToCart();
        await BaseHeaderModule.openCart();
        await CartPage.goToCheckout();
        await CheckoutInformationPage.enterCheckoutInfoAndContinue(makeRandomString(5), makeRandomString(5), makeRandomString(5));
        await CheckoutOverviewPage.finishPurchase();

        await expect(CheckoutCompleteModule.isCompleteHeaderDisplayed()).toBeTruthy();
        await expect(CheckoutCompleteModule.backHomeButton).toBeDisplayed()
    });
});

