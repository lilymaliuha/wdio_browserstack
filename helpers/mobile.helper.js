import { loggerHelper } from "./logger.helper.js";

export async function scrollToElementWithText(elementText) {
    loggerHelper.info(`Scroll to element with text ${elementText}`);

    const elementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text(\"${elementText}\"))`;
    await $(`android=${elementSelector}`);
}
