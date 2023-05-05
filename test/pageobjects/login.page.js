import { loggerHelper } from "../../helpers/logger.helper.js";

class LoginPage {

    get usernameInput () { return $('~test-Username'); }
    get passwordInput () { return $('~test-Password'); }
    get loginButton () { return $('~test-LOGIN'); }

    async login(username, password) {
        loggerHelper.info('Sign in with credentials');

        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click()
    }

}
export default new LoginPage();
