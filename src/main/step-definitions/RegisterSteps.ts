import { Register } from './../pageobjects/Register';
import { Given, When, Then } from "@wdio/cucumber-framework";
import { DataTable } from "@cucumber/cucumber";

const register = new Register();

Given(/^user navigates to automation demo site$/, async() => {
	await register.goToDemoSite();
});

When(/^user enters FirstName and LastName$/, async(table:DataTable) => {
	await register.enterFullName(table);
});

When(/^user enters Address$/, async(table:DataTable) => {
	await register.enterAddress(table);
});

When(/^user enters Email Address$/, async(table:DataTable) => {
	await register.enterEmail(table);
});

When(/^user enters Phone number$/, async(table:DataTable) => {
	await register.enterPhone(table);
});

When(/^user selects Gender$/, async(table:DataTable) => {
	await register.selectGender(table);
});

When(/^user selects hobbies$/, async(table:DataTable) => {
	await register.selectHobbies(table);
});

When(/^user selects language$/, async(table:DataTable) => {
	await register.selectlanguage(table);
});

When(/^user selects skills$/, async(table:DataTable) => {
	await register.selectSkill(table);
});

When(/^user selects country$/, async(table:DataTable) => {
	await register.selectCountry(table);
});

When(/^user selects date of birth$/, async(table:DataTable) => {
	await register.selectDateOfBirth(table);
});

When(/^user enters "([^"]*)"$/, async(password) => {
	await register.enterPassword(password);
});

When(/^user enters confirm "([^"]*)"$/, async(password) => {
	await register.enterConfirmPassword(password);
});

Then(/^user clicks on submit button$/, async() => {
	await register.clickOnSubmit();
});
