import { SwitchWindows } from './../pageobjects/SwitchWindows';
import { Given, When, Then } from "@wdio/cucumber-framework";

const switchWindows = new SwitchWindows();

Given(/^navigate to switchTab url$/, async() => {
	await switchWindows.goToSwitchTabPage();
});

When(/^user clicks on Open New Tabs Link$/, async() => {
	await switchWindows.clickOnOpenNewTabButton();
});

Then(/^user clicks on click button$/, async() => {
	await switchWindows.clickOnClickButton();
    await switchWindows.switchbackToSwitchPage();
});
