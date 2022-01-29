import { Assert } from './../Utils/Assert';
import { UIActionLibrary } from './../Utils/UIActionLibrary';
import { PropertiesReader } from "../Utils/PropertiesReader";
import { ReadConfig } from '../config/ReadConfig';
import { ExpectedWaits } from '../Utils/ExpectedWaits';
import { HomePage } from './HomePage';
const readConf = new ReadConfig();
const prop = new PropertiesReader();
const expectedWaits = new ExpectedWaits();

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
        let url = await readConf.getbaseUrl();
        await browser.url(url);
        browser.maximizeWindow();
    }

    async clickOnOpenNewTabButton()
    {
        await expectedWaits.waitForElementToBeClickable(this.newTab,HomePage.timeOut);
        await UIActionLibrary.click(this.newTab);
    }

    async clickOnClickButton()
    {
        await expectedWaits.waitForElementToBeClickable(this.clickButton,HomePage.timeOut);
        await UIActionLibrary.click(this.clickButton);
        await browser.pause(5000);
        console.log("Window handle before switch is "+await browser.getWindowHandle());
        await UIActionLibrary.swicthTab();
        await Assert.equal(await this.text.isDisplayed(),true);
    }

    async switchbackToSwitchPage()
    {
        await UIActionLibrary.swicthTab();
        await expectedWaits.waitForElementToBeClickable(this.clickButton,HomePage.timeOut);
        await Assert.equal(await this.clickButton.isDisplayed(),true);
    }

    async moveToSwitchToTab()
    {
        await expectedWaits.waitForElementToBeDisplayed(this.switchToTab,HomePage.timeOut);
        await UIActionLibrary.moveTo(this.switchToTab);
    }

    async clickOnRegister()
    {
        await expectedWaits.waitForElementToBeClickable(this.RegisterTab,HomePage.timeOut);
        await UIActionLibrary.click(this.RegisterTab);
        await expectedWaits.waitForElementToBeDisplayed(this.RegisterTab,HomePage.timeOut);
        await UIActionLibrary.scrollIntoView(this.submitbtn);
    }


}