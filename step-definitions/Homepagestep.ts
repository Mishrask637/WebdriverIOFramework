import { Given, When, Then } from '@wdio/cucumber-framework';
import {HomePage} from '../pageobjects/HomePage';
const home = new HomePage();

Given(/^user is on the Manager Home page$/, async() => {
	await home.navigateToManagerLoginHomepage();
});

When(/^user clicks on "([^"]*)" Tab$/, async (tabname) => {
	await home.clickOnTab(tabname);
});

When(/^user enters customer "([^"]*)" "([^"]*)"$/, async (fieldname,fieldValue) => {
	await home.enterFieldValue(fieldname,fieldValue);
});

Then(/^user clicks on "([^"]*)" Button and verifies the Customer ID generated$/, async(buttonName) => {
	await home.clickOnButton(buttonName);
});

When(/^user selects the added customer name "([^"]*)" from the dropdown$/, async(customerName) => {
	await home.selectCustomerName(customerName);
});

When(/^user selects the currency type "([^"]*)"$/, async(currency) => {
	await home.selectCurrency(currency);
});

Then(/^user clicks on "([^"]*)" Button and verifies the Account number generated$/, async(buttonName) => {
	await home.clickOnButton(buttonName); 
});

When(/^user enters the added customer name "([^"]*)" in the search field$/, async(customerName) => {
	await home.searchCustomer(customerName);
});

Then(/^user validates the customer details displayed$/, async() => {
	await home.verifyCustomerFromTable();
});
