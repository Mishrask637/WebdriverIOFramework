"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.HomePage = void 0;
var PropertiesReader_1 = require("./../Utils/PropertiesReader");
var ExpectedWaits_1 = require("../Utils/ExpectedWaits");
var UIActionLibrary_1 = require("../Utils/UIActionLibrary");
var logger_1 = require("../Logger/logger");
var uiActions = new UIActionLibrary_1.UIActionLibrary();
var expectedWaits = new ExpectedWaits_1.ExpectedWaits();
var prop = new PropertiesReader_1.PropertiesReader();
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.addCustomerTab = $("//button[contains(text(),'Add Customer')]");
        this.openAccountTab = $("//button[contains(text(),'Open Account')]");
        this.customersTab = $("//button[contains(text(),'Customers')]");
        this.firstNameField = $("//label[contains(text(),'First')]//following-sibling::input[contains(@class,'form-control')]");
        this.lastNameField = $("//label[contains(text(),'Last')]//following-sibling::input[contains(@class,'form-control')]");
        this.postCodeField = $("//label[contains(text(),'Post')]//following-sibling::input[contains(@class,'form-control')]");
        this.addCustomerButton = $("//button[text()='Add Customer']");
        this.processButton = $("//button[text()='Process']");
        this.customerDropdownOptions = $('#userSelect');
        this.currencyDropdownOptions = $("#currency");
        this.searchField = $("//input[@placeholder='Search Customerr']");
        this.deleteButton = $("//button[text()='Delete']");
        this.implicitTimeout = 10000;
    }
    Object.defineProperty(HomePage.prototype, "tableRow", {
        get: function () {
            return $$("//table/tbody/tr/td");
        },
        enumerable: false,
        configurable: true
    });
    HomePage.prototype.clickOnTab = function (tabname) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, tabname];
                    case 1:
                        if (!((_g.sent()) == "Add Customer")) return [3 /*break*/, 4];
                        _b = (_a = UIActionLibrary_1.UIActionLibrary).click;
                        return [4 /*yield*/, this.addCustomerTab];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_g.sent()])];
                    case 3:
                        _g.sent();
                        return [3 /*break*/, 12];
                    case 4: return [4 /*yield*/, tabname];
                    case 5:
                        if (!((_g.sent()) == "Open Account")) return [3 /*break*/, 8];
                        _d = (_c = UIActionLibrary_1.UIActionLibrary).click;
                        return [4 /*yield*/, this.openAccountTab];
                    case 6: return [4 /*yield*/, _d.apply(_c, [_g.sent()])];
                    case 7:
                        _g.sent();
                        return [3 /*break*/, 12];
                    case 8: return [4 /*yield*/, tabname];
                    case 9:
                        if (!((_g.sent()) == "Customers")) return [3 /*break*/, 12];
                        _f = (_e = UIActionLibrary_1.UIActionLibrary).click;
                        return [4 /*yield*/, this.customersTab];
                    case 10: return [4 /*yield*/, _f.apply(_e, [_g.sent()])];
                    case 11:
                        _g.sent();
                        _g.label = 12;
                    case 12: return [4 /*yield*/, browser.pause(2000)];
                    case 13:
                        _g.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.enterFieldValue = function (fieldname, fieldValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, fieldname];
                    case 1:
                        if (!((_g.sent()) == "First Name")) return [3 /*break*/, 4];
                        _b = (_a = UIActionLibrary_1.UIActionLibrary).sendKeys;
                        return [4 /*yield*/, this.firstNameField];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_g.sent(), fieldValue])];
                    case 3:
                        _g.sent();
                        return [3 /*break*/, 12];
                    case 4: return [4 /*yield*/, fieldname];
                    case 5:
                        if (!((_g.sent()) == "Last Name")) return [3 /*break*/, 8];
                        _d = (_c = UIActionLibrary_1.UIActionLibrary).sendKeys;
                        return [4 /*yield*/, this.lastNameField];
                    case 6: return [4 /*yield*/, _d.apply(_c, [_g.sent(), fieldValue])];
                    case 7:
                        _g.sent();
                        return [3 /*break*/, 12];
                    case 8: return [4 /*yield*/, fieldname];
                    case 9:
                        if (!((_g.sent()) == "Post Code")) return [3 /*break*/, 12];
                        _f = (_e = UIActionLibrary_1.UIActionLibrary).sendKeys;
                        return [4 /*yield*/, this.postCodeField];
                    case 10: return [4 /*yield*/, _f.apply(_e, [_g.sent(), fieldValue])];
                    case 11:
                        _g.sent();
                        _g.label = 12;
                    case 12: return [4 /*yield*/, browser.pause(1000)];
                    case 13:
                        _g.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickOnButton = function (buttonName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, userId;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, buttonName];
                    case 1:
                        if (!((_e.sent()) == "Add Customer")) return [3 /*break*/, 4];
                        _b = (_a = UIActionLibrary_1.UIActionLibrary).click;
                        return [4 /*yield*/, this.addCustomerButton];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_e.sent()])];
                    case 3:
                        _e.sent();
                        _e.label = 4;
                    case 4: return [4 /*yield*/, buttonName];
                    case 5:
                        if (!((_e.sent()) == "Process")) return [3 /*break*/, 8];
                        _d = (_c = UIActionLibrary_1.UIActionLibrary).click;
                        return [4 /*yield*/, this.processButton];
                    case 6: return [4 /*yield*/, _d.apply(_c, [_e.sent()])];
                    case 7:
                        _e.sent();
                        _e.label = 8;
                    case 8: return [4 /*yield*/, browser.pause(1000)];
                    case 9:
                        _e.sent();
                        return [4 /*yield*/, UIActionLibrary_1.UIActionLibrary.getAlertText()];
                    case 10:
                        userId = _e.sent();
                        logger_1.log.info("Alert Text is " + userId);
                        return [4 /*yield*/, UIActionLibrary_1.UIActionLibrary.acceptAlert()];
                    case 11:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigateToManagerLoginHomepage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prop.getProperty('uri')];
                    case 1:
                        uri = _a.sent();
                        return [4 /*yield*/, browser.url(uri)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, browser.maximizeWindow()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, browser.setTimeout({ 'implicit': this.implicitTimeout })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.selectCustomerName = function (customerName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customerDropdownOptions.selectByVisibleText(customerName)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, browser.pause(1000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.selectCurrency = function (currency) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.currencyDropdownOptions.selectByVisibleText(currency)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, browser.pause(1000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.searchCustomer = function (customerName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = expectedWaits).waitForElementToBeDisplayed;
                        return [4 /*yield*/, this.searchField];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_e.sent(), HomePage.timeOut])];
                    case 2:
                        _e.sent();
                        _d = (_c = UIActionLibrary_1.UIActionLibrary).sendKeys;
                        return [4 /*yield*/, this.searchField];
                    case 3: return [4 /*yield*/, _d.apply(_c, [_e.sent(), customerName])];
                    case 4:
                        _e.sent();
                        return [4 /*yield*/, browser.pause(1000)];
                    case 5:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.verifyCustomerFromTable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, colLength, ColArray, i, array, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _b = (_a = expectedWaits).waitForElementToBeDisplayed;
                        return [4 /*yield*/, this.deleteButton];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_f.sent(), HomePage.timeOut])];
                    case 2:
                        _f.sent();
                        return [4 /*yield*/, this.tableRow];
                    case 3: return [4 /*yield*/, (_f.sent()).length];
                    case 4:
                        colLength = _f.sent();
                        logger_1.log.info("Column Length is " + colLength);
                        ColArray = [];
                        i = 0;
                        _f.label = 5;
                    case 5:
                        if (!(i < colLength)) return [3 /*break*/, 9];
                        array = {
                            col: this.tableRow[i].getText()
                        };
                        _d = (_c = logger_1.log).info;
                        _e = "Col Value is ";
                        return [4 /*yield*/, array.col];
                    case 6:
                        _d.apply(_c, [_e + (_f.sent())]);
                        return [4 /*yield*/, ColArray.push(array.col)];
                    case 7:
                        _f.sent();
                        _f.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 5];
                    case 9: return [4 /*yield*/, browser.pause(1000)];
                    case 10:
                        _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.timeOut = 10000;
    return HomePage;
}());
exports.HomePage = HomePage;
