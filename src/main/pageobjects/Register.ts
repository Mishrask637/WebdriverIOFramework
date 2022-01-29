import { UIActionLibrary } from "../Utils/UIActionLibrary";
import { log } from "../Logger/logger";
import { PropertiesReader } from "../Utils/PropertiesReader";
import { ReadConfig } from '../config/ReadConfig';
import { DataTable } from "@cucumber/cucumber";
import { HomePage } from "./HomePage";
import { ExpectedWaits } from '../Utils/ExpectedWaits';

const readConf = new ReadConfig();
const expectedWaits = new ExpectedWaits();
const prop = new PropertiesReader();

export class Register {

    firstName = $("//input[@placeholder='First Name']");
    lastName = $("//input[@placeholder='Last Name']");
    address = $("//textarea[contains(@class,'form-control')]");
    email = $("//input[contains(@class,'ng-valid-email')]");
    phone = $("//input[contains(@class,'ng-valid-pattern')]");
    male = $("(//input[contains(@name,'radiooptions')])[1]");
    female = $("(//input[contains(@name,'radiooptions')])[2]");
    cricket = $('#checkbox1');
    language = $('#msdd');
    english = $("//a[text()='English']");
    skills = $('#Skills');
    country = $("//span[contains(@class,'select2-selection--single')]");
    search = $("//input[contains(@class,'select2-search__field')]");
    countryValue = $("//li[contains(@class,'select2-results__option--highlighted')]");
    birthYear = $('#yearbox');
    birthMonth = $("//select[@placeholder='Month']");
    birthDate = $('#daybox')
    password = $('#firstpassword');
    confirmPassword = $('#secondpassword');
    submit = $('#submitbtn');

    get hobbies() {
        return $$('.checks');
    }


    async enterFullName(data: DataTable) {
        let rows = await UIActionLibrary.hashes(data);
        let firstName = await rows[0].FirstName;
        let lastname = await rows[0].LastName;
        await expectedWaits.waitForElementToBeDisplayed(this.firstName,HomePage.timeOut);
        await UIActionLibrary.sendKeys(this.firstName, firstName);
        await UIActionLibrary.sendKeys(this.lastName, lastname);
    }

    async enterAddress(data: DataTable) {
        let rows = await UIActionLibrary.hashes(data);
        let address = await rows[0].Address;
        await expectedWaits.waitForElementToBeDisplayed(this.address,HomePage.timeOut);
        await UIActionLibrary.sendKeys(this.address, address);
    }

    async enterEmail(data: DataTable) {
        let rows = await UIActionLibrary.hashes(data);
        let emailAddress = await rows[0].Email;
        await expectedWaits.waitForElementToBeDisplayed(this.email,HomePage.timeOut);
        await UIActionLibrary.sendKeys(this.email, emailAddress);
    }

    async enterPhone(data: DataTable) {
        let rows = await UIActionLibrary.hashes(data);
        let phone = await rows[0].PhoneNumber;
        await expectedWaits.waitForElementToBeDisplayed(this.phone,HomePage.timeOut);
        await UIActionLibrary.sendKeys(this.phone, phone);
    }

    async selectGender(data: DataTable) {
        let rows = await UIActionLibrary.hashes(data);
        let gender = await rows[0].Gender;
        if (gender == 'Male') {
            await UIActionLibrary.click(await this.male);
        }
        if (gender == 'female') {
            await UIActionLibrary.click(await this.female);
        }
    }

    async selectHobbies(data: DataTable) {
        let numberOfHobbies = await this.hobbies.length;
        console.log("Number of hobbies are " + numberOfHobbies);
        let hobby = await data.raw().toString();
        await log.info('hobby Value is ' + hobby);
        if (hobby == 'Cricket') {
            await expectedWaits.waitForElementToBeDisplayed(this.cricket,HomePage.timeOut);
            await UIActionLibrary.click(await this.cricket);
        }
    }

    async selectlanguage(data: DataTable) {
        let language = await data.raw().toString();
        await log.info('language Value is ' + language);
        await expectedWaits.waitForElementToBeDisplayed(this.language,HomePage.timeOut);
        await UIActionLibrary.click(this.language);
        if (language == 'English') {
            await expectedWaits.waitForElementToBeDisplayed(this.english,HomePage.timeOut);
            await UIActionLibrary.click(await this.english);
        }
    }

    async selectSkill(data: DataTable) {
        let skill = await data.raw().toString();
        await log.info('Skill Value is ' + skill);
        await expectedWaits.waitForElementToBeDisplayed(this.skills,HomePage.timeOut);
        await this.skills.selectByVisibleText(skill);
    }

    async selectCountry(data: DataTable) {
        await UIActionLibrary.scrollIntoView(await this.submit);
        let country = await data.raw().toString();
        await log.info('Country Value is ' + country);
        await expectedWaits.waitForElementToBeDisplayed(this.country,HomePage.timeOut);
        await UIActionLibrary.click(await this.country);
        await UIActionLibrary.sendKeys(await this.search, country);
        await UIActionLibrary.click(await this.countryValue);
    }

    async selectDateOfBirth(data: DataTable) {
        let rows = await UIActionLibrary.hashes(data);
        let Year = await rows[0].Year;
        let Month = await rows[0].Month;
        let Date = await rows[0].Date;
        await expectedWaits.waitForElementToBeDisplayed(this.birthYear,HomePage.timeOut);
        await this.birthYear.selectByVisibleText(Year);
        await this.birthMonth.selectByVisibleText(Month);
        await this.birthDate.selectByVisibleText(Date);
    }

    async enterPassword(password) {
        await expectedWaits.waitForElementToBeDisplayed(this.password,HomePage.timeOut);
        await UIActionLibrary.sendKeys(this.password, password);
    }

    async enterConfirmPassword(password) {
        await expectedWaits.waitForElementToBeDisplayed(this.confirmPassword,HomePage.timeOut);
        await UIActionLibrary.sendKeys(this.confirmPassword, password);
    }

    async clickOnSubmit() {
        await expectedWaits.waitForElementToBeDisplayed(this.submit,HomePage.timeOut);
        await UIActionLibrary.click(this.submit)
        await browser.pause(5000);
    }

    async goToDemoSite() {
        let url = await readConf.getbaseUrl();
        if(url=='')
        {
            url = 'http://demo.automationtesting.in/Register.html'
        }
        await browser.url(url);
        await browser.maximizeWindow();
    }
}