export class ExpectedWaits {


    async waitForElementToBeDisplayed(element, timeOut) {
        await browser.waitUntil(async ()=> {return await element.isDisplayed()},
        {timeout:timeOut,timeoutMsg:'Element Not DIsplayed'});
    }

    async waitForElementToBeClickable(element, timeOut) {
        await browser.waitUntil(async ()=> {return await element.isClickable()},{
            timeout: timeOut, timeoutMsg: "Element Not Clickable"});
    }

    async waitForElementToBeEnable(element, timeOut) {
        await browser.waitUntil(async ()=> {return await element.isEnabled()}, {
            timeout: timeOut, timeoutMsg: "Element Not Enabled"
        });
    }

    async waitForAlertToBeDisplayed(timeOut) {
        await browser.waitUntil(async ()=> {return browser.isAlertOpen()}, {
            timeout: timeOut, timeoutMsg: "Element Not Enabled"
        });
    }
}
