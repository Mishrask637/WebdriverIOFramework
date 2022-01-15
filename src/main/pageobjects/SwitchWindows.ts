import { UIActionLibrary } from './../Utils/UIActionLibrary';
import { PropertiesReader } from "../Utils/PropertiesReader";

const prop = new PropertiesReader();

export class SwitchWindows{

    newTab = $("//a[contains(text(),'Open New Tabbed Windows')]");
    clickButton = $("(//button[contains(text(),'click')])[1]");
    seleniumLogo = $('#selenium_logo');
    text = $("//h1[text()=\"Selenium automates browsers. That's it!\"]");
    switchToTab = $("//a[text()='SwitchTo']");
    RegisterTab = $("//a[text()='Register']");
    submitbtn = $('#submitbtn');
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
        console.log("Window handle before switch is "+await browser.getWindowHandle());
        await UIActionLibrary.swicthTab();
        await expect(await this.text.isDisplayed()).toBe(true);
    }

    async switchbackToSwitchPage()
    {
        await UIActionLibrary.swicthTab();
        await browser.pause(5000);
        await expect(await this.clickButton.isDisplayed()).toBe(true);
    }

    async moveToSwitchToTab()
    {
        await UIActionLibrary.moveTo(this.switchToTab);
        await browser.pause(5000);
    }

    async clickOnRegister()
    {
        await UIActionLibrary.click(this.RegisterTab);
        await browser.pause(2000);
        await UIActionLibrary.scrollIntoView(this.submitbtn);
    }


}