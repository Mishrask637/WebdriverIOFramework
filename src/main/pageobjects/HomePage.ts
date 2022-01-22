import { PropertiesReader } from './../Utils/PropertiesReader';
import { ReadConfig } from '../config/ReadConfig';
import { ChainablePromiseElement, Element } from 'webdriverio';
import click from 'webdriverio/build/commands/element/click';
import { ExpectedWaits } from '../Utils/ExpectedWaits';
import { UIActionLibrary } from '../Utils/UIActionLibrary';
import {log} from '../Logger/logger';
const uiActions = new UIActionLibrary();
const expectedWaits = new ExpectedWaits();
const prop = new PropertiesReader();
const readConf = new ReadConfig();
export class HomePage {

    addCustomerTab = $("//button[contains(text(),'Add Customer')]");
    openAccountTab = $("//button[contains(text(),'Open Account')]");
    customersTab= $("//button[contains(text(),'Customers')]");
    firstNameField = $("//label[contains(text(),'First')]//following-sibling::input[contains(@class,'form-control')]");
    lastNameField = $("//label[contains(text(),'Last')]//following-sibling::input[contains(@class,'form-control')]");
    postCodeField = $("//label[contains(text(),'Post')]//following-sibling::input[contains(@class,'form-control')]");
    addCustomerButton = $("//button[text()='Add Customer']");
    processButton = $("//button[text()='Process']");
    customerDropdownOptions = $('#userSelect');
    currencyDropdownOptions = $("#currency");
    searchField = $("//input[@placeholder='Search Customer']");
    deleteButton = $("//button[text()='Delete']");
    static timeOut = 10000;
    implicitTimeout = 10000;


    get tableRow()
    {
        return $$("//table/tbody/tr/td");
    }

    async clickOnTab(tabname)
    {
        if(await tabname == "Add Customer")
        {
            await UIActionLibrary.click(await this.addCustomerTab);
            // await this.addCustomerTab.click();
        }
        else if(await tabname == "Open Account")
        {
            await UIActionLibrary.click(await this.openAccountTab);
            // await this.openAccountTab.click();
        }
        else if(await tabname == "Customers")
        {
            await UIActionLibrary.click(await this.customersTab);
            // await this.customersTab.click();
        }
        await browser.pause(2000);
    }

    async enterFieldValue(fieldname,fieldValue)
    {
        if(await fieldname == "First Name")
        {
            await UIActionLibrary.sendKeys(await this.firstNameField,fieldValue);
            // await this.firstNameField.setValue(fieldValue);
        }
        else if(await fieldname == "Last Name")
        {
            await UIActionLibrary.sendKeys(await this.lastNameField,fieldValue);
            // await this.lastNameField.setValue(fieldValue);
        }
        else if(await fieldname == "Post Code")
        {
            await UIActionLibrary.sendKeys(await this.postCodeField,fieldValue);
            // await this.postCodeField.setValue(fieldValue);
        }
        await browser.pause(1000);
    }

    async clickOnButton(buttonName)
    {
        if(await buttonName=="Add Customer")
        {
            await UIActionLibrary.click(await this.addCustomerButton);
            // await this.addCustomerButton.click();
        }
        if(await buttonName=="Process")
        {
            await UIActionLibrary.click(await this.processButton);
            // await this.processButton.click();
        }
        await browser.pause(1000);
        let userId = await UIActionLibrary.getAlertText();
        log.info("Alert Text is "+userId);
        await UIActionLibrary.acceptAlert();
    }

    async navigateToManagerLoginHomepage()
    {
        let uri = await readConf.getbaseUrl();
        await browser.url(uri);
        await browser.maximizeWindow();
        await browser.setTimeout({'implicit': this.implicitTimeout });
    }

    async selectCustomerName(customerName)
    {
        await this.customerDropdownOptions.selectByVisibleText(customerName);
        await browser.pause(1000);
    }

    async selectCurrency(currency)
    {
        await this.currencyDropdownOptions.selectByVisibleText(currency);
        await browser.pause(1000);
    }

    async searchCustomer(customerName)
    {
        await expectedWaits.waitForElementToBeDisplayed(await this.searchField,HomePage.timeOut);
        await UIActionLibrary.sendKeys(await this.searchField,customerName);
        await browser.pause(1000);
    }

    async verifyCustomerFromTable()
    {
        await expectedWaits.waitForElementToBeDisplayed(await this.deleteButton,HomePage.timeOut);
        let colLength = await (await this.tableRow).length;
        log.info("Column Length is "+colLength);
        let ColArray = [];
        for(let i=0;i<colLength;i++)
        {
            let array = {
                col : this.tableRow[i].getText()
            }
            log.info("Col Value is "+await array.col);
            await ColArray.push(array.col);
        }
        await browser.pause(1000);
    }
}

