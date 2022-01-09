import { UIActionLibrary } from './../Utils/UIActionLibrary';
import { PropertiesReader } from "../Utils/PropertiesReader";

const prop = new PropertiesReader();

export class SwitchWindows{

    newTab = $("//a[contains(text(),'Open New Tabbed Windows')]");
    clickButton = $("(//button[contains(text(),'click')])[1]");
    seleniumLogo = $('#selenium_logo');
    text = $("//h1[text()=\"Selenium automates browsers. That's it!\"]")

    async goToSwitchTabPage()
    {
        let url = await prop.getProperty('switchTabUrl');
        await browser.url(url);
        browser.maximizeWindow();
    }

    async clickOnOpenNewTabButton()
    {
        await UIActionLibrary.click(this.newTab);
    }

    async clickOnClickButton()
    {
        await UIActionLibrary.click(this.clickButton);
        await browser.pause(5000);
        await UIActionLibrary.swicthToNTab(0);
        await browser.pause(5000);
        await expect(await this.clickButton.isDisplayed()).toBe(true);
    }

    async switchbackToSwitchPage()
    {
        await UIActionLibrary.swicthToNTab(1);
        await browser.pause(5000);
        await expect(await this.text.isDisplayed()).toBe(true);
    }

}