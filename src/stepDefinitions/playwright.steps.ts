import { ICustomWorld, test_user } from '../support/custom-world';
import { config } from '../support/config';
// TODO: Workaround for https://github.com/cucumber/cucumber-js/issues/2353
// Revert when issue is solved
// import { Given, When, Then } from '@cucumber/cucumber';
const importCwd = require('import-cwd')
const { Given, When, Then } = importCwd('@cucumber/cucumber')
import {
    chromium,
    Dialog,
    Download,
    expect,
    Page,
} from '@playwright/test';
import { generateFake } from '../lib/DataGeneration';
import { Sites } from '../pageObjects/index';
import { getUser, getUserById } from '../lib/UserHelper';
import { verifyCsvHeaders, verifyXlsxHeaders } from '../lib/FileHelper';
import { _electron } from 'playwright';

require('dotenv').config();

let user: test_user;
let page: Page | undefined;
let site: string;
let store = {};
let userPassword = process.env.GENERAL_USER_PASSWORD;

async function _my(key: string) {
    return !!user[key] ? user[key] : `user['${key}'] not defined`;
}

async function _store(refName: string, refValue?: string) {
    return !!refValue
        ? (store[refName] = refValue)
        : !!store[refName]
        ? store[refName]
        : `store['${refName}'] not defined`;
}

async function _random(type: string) {
    const val = generateFake(type);
    //rethink if store needs to be here
    //_store(type, val);
    return val;
}

async function _textFromElement(elementName: string, page, site, pagename) {
    await page
        .locator(Sites[site][pagename][elementName]).scrollIntoViewIfNeeded()
    let textOfElement = await page
        .locator(Sites[site][pagename][elementName])
        .first()
        .textContent();

    //        await this.page.locator(Sites[this.site][this.pagename][elementName])
    return textOfElement;
}

async function _valueFromElement(elementName: string, page, site, pagename) {
    const elementLocator = Sites[site][pagename][elementName];
    if (!elementLocator) {
        throw new Error(
            `Element locator for ${elementName} not found in ${site}/${pagename}`
        );
    }
    await page.locator(elementLocator).scrollIntoViewIfNeeded()
    const valueOfElement = await page.locator(elementLocator).inputValue();

    const value = valueOfElement.toString();
    return value;
}

async function _getCurrentURL(page) {
    const currentUrl = await page.url();
    return currentUrl;
}

//this is to be used on the Fulfillment page
async function _userId(page) {
    await page
        .locator(Sites.Archimedes.Fulfillment['Test Taker Link']).scrollIntoViewIfNeeded()
    const hrefUserUrl = await page
        .locator(Sites.Archimedes.Fulfillment['Test Taker Link'])
        .first()
        .getAttribute('href');
    const hrefUserId = hrefUserUrl.slice(
        hrefUserUrl.lastIndexOf('/') + 1,
        hrefUserUrl.length
    );
    return hrefUserId;
}

async function _reservationId(page) {
    await page
        .locator(
            Sites.Archimedes['Student Receipt Page']['Reservation Id Link']
        ).scrollIntoViewIfNeeded()
    const hrefReservationUrl = await page
        .locator(
            Sites.Archimedes['Student Receipt Page']['Reservation Id Link']
        )
        .first()
        .getAttribute('href');
    var hrefReservationId = hrefReservationUrl
        .slice(
            hrefReservationUrl.lastIndexOf('/') - 8, //If you are going to use DEMO then you need to change 7 to 9. This is due to the large number of reservations in DEMO compared to other places.
            hrefReservationUrl.lastIndexOf('/')
        )
        .replace('/', '');
    return '.js-exam-row.reservation_' + hrefReservationId;
}

async function _fulfillmentUrl(page, resId: string) {
    await page
        .locator(resId).scrollIntoViewIfNeeded()
    var fulfillmentID = await page
        .locator(resId)
        .first()
        .getAttribute('data-fulfillment');
    var hrefFulfillmentUrl = `${config.BASE_URL}fulfillments/${fulfillmentID}`;
    return hrefFulfillmentUrl;
}

async function storeValue(refName: string, refValue: string) {
    await _store(refName, refValue);
}

async function getStoredValue(refName: string) {
    return await _store(refName);
}

function _downloadDir(fileName: string): string {
    return (
        {
            chromium: '../tmp/chromeDownloads',
            firefox: '../tmp/firefoxDownloads',
        }[config.browser] +
        '/' +
        fileName
    );
}

async function _extensionMenu(uuid: string) {
    let extensionURL;
    if (uuid.includes('testExtension')) {
        // Specific page for example_extension.crx view
        extensionURL =
            'chrome-extension://mjdmgoiobnbkfcfjcceaodlcodhpokgn/src/browser_action/browser_action.html';
    } else {
        const extensionId = uuid.split(' ')[1];
        extensionURL = `chrome-extension://${extensionId}/Popup.html`;
    }
    return extensionURL;
}

function _getLmsUrl(refName: string) {
    switch (refName) {
        case 'Canvas':
            return config.lms.canvas;
        case 'BrightSpace':
            return config.lms.brightspace;
        case 'BlackboardLatest':
            return config.lms.blackboard_latest;
        case 'MoodleRooms':
            return config.lms.moodleRooms;
        case 'MoodleLatest':
            return config.lms.moodle_latest;
        case 'MoodlePrevious':
            return config.lms.moodle_previous;
        case 'Pearson':
            return config.lms.pearson;
        default:
            return refName;
    }
}

When(
    'I store {string} as {string}',
    async function (this: ICustomWorld, refValue: string, refName: string) {
        this.disableStepScreenshot();
        page = this.page;
        const pageName = this.pagename;
        const site = this.site;
        let storedValue: string;
        if (refValue.includes('_random')) {
            // Let's check the type
            const parameters: Array<string> = refValue.split(/\s+/);
            const randomType = parameters[1];

            // Are we dealing with a range?
            const rangeWasSpecified = refValue.match(/[(]-?\d+[,]\s?-?\d+[)]/g)
            if (randomType.includes('number') && rangeWasSpecified) {
                // Parse the range from the step string
                const range = parameters.slice(2).join(' '); // Combine all elements after the second
                const [minStr, maxStr] = range.match(/-?\d+/g); // Extract numbers allowing for negative sign

                // Convert strings to numbers
                const min = parseInt(minStr);
                const max = parseInt(maxStr);

                // Generate a random number between the specified range
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

                storedValue = randomNumber.toString();
            } else {
                // Handle other random types if needed
                const randomValue = await _random(randomType);
                storedValue = randomValue;
            }
        } else if (refValue.includes('_textFromElement')) {
            const element = refValue.replace('_textFromElement ', '');
            const elementText = await _textFromElement(
                element,
                page,
                site,
                pageName
            );
            storedValue = elementText;
        } else if (refValue.includes('_getFulfillmentIdFromUrl')) {
            const url = await _getCurrentURL(page);
            const uuidRegex = /([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i;
            const match = uuidRegex.exec(url);
            const uuid = match[0]; // Extract the first capturing group
            storedValue = uuid;
        } else if (refValue.includes('_getCurrentUrl')) {
            const url = await _getCurrentURL(page);
            storedValue = url;
        } else if (refValue.includes('_my')) {
            const fieldValueArray = refValue.split(' ');
            let value = fieldValueArray[1];
            storedValue = await _my(value);
        } else if (refValue.includes('_userId')) {
            const userId = await _userId(page);
            storedValue = userId;
        } else if (refValue.includes('_reservationId')) {
            storedValue = await _reservationId(page);
        } else if (refValue.includes('_fulfillmentUrl') && refValue.includes('_store')) {
            refValue = refValue.replace('_fulfillmentUrl _store ', '');
            refValue = await getStoredValue(refValue);
            storedValue = await _fulfillmentUrl(page, refValue);
        } else if (refValue.includes('_extensionMenu')) {
            const uuid = refValue.replace('_extensionMenu ', '');
            storedValue = await _extensionMenu(uuid);
        } else if (refValue.includes('_valueFromElement')) {
            const element = refValue.replace('_valueFromElement ', '');
            const elementValue = await _valueFromElement(
                element,
                page,
                site,
                pageName
            );
            storedValue = elementValue;
        } else if(refValue.includes('_getAttribute')) {
            refValue = refValue.replace('_getAttribute ', '');
            const attribute = refValue.split(' ')[0];
            const element = refValue.replace(attribute + " ", '');
            await page.locator(Sites[this.site][this.pagename][element]).scrollIntoViewIfNeeded()
            storedValue = await page.locator(Sites[this.site][this.pagename][element])
                                .first()
                                .getAttribute(attribute);
        } else if(refValue.trim() == "_baseUrl") {
            storedValue = config.BASE_URL;
        } else {
            storedValue = refValue;
        }
        await storeValue(refName, storedValue);
        storedValue = await getStoredValue(refName);
        console.log(`Stored '${storedValue}' into '${refName}'`);
    }
);

Then('I retrieve stored element {string}', async function (this: ICustomWorld, refName: string) {
    this.disableStepScreenshot();
    const retrievedValue = await getStoredValue(refName);
    console.log(`Retrieved value for ${refName}: ${retrievedValue}`);
});

When('I switch to last open window in current context', async function (this: ICustomWorld) {
    this.disableStepScreenshot();
    const pages = this.page.context().pages();
    var lastPage: Page = pages[pages.length - 1];
    this.page = lastPage;
    console.log('===============');
    console.log(`SWITCHED TO PAGE: ${await lastPage.title()}`);
    console.log('===============');
});

Then('I switch to window {string}', async function (this: ICustomWorld, tabTitle: string) {
    this.disableStepScreenshot();
    if (tabTitle.includes('_store')) {
        const refName = tabTitle.replace('_store ', '');
        tabTitle = await getStoredValue(refName);
    }
    const pages = [];
    this.contextCollection.forEach(context => {
        pages.push(...context.pages());
    });
    for (let i = 0; i < pages.length; i++) {
        const currentPage: Page = pages[i];
        if (!currentPage || currentPage.isClosed()) {
            continue; // Skip to next iteration if page is undefined or closed
        }
        const currentPageTitle = await currentPage.title();
        // If current page title contains tabTitle string, switch to it
        if (
            currentPageTitle.includes(tabTitle) ||
            currentPage.url().includes(tabTitle)
        ) {
            this.page = currentPage;
            console.log('===============');
            console.log(`SWITCHED TO PAGE: ${currentPageTitle}`);
            console.log('===============');
            return; // Exit the function once switched to the desired page
        }
    }
    console.error(`Window with title "${tabTitle}" not found.`);
});

Then('I navigate to {string}', async function (this: ICustomWorld, name: string) {
    const page: Page = this.page!;
    let destination: string;

    if(name == 'Archimedes'){
        destination = config.BASE_URL;
    }
    else if(name.includes('_store')){
        const storePattern = /_store\s([^ ]+(.*))/;
        let result = name;
        let matchedResults: RegExpMatchArray;

        if(result.includes('{{')){
            let regex = /{{(.*)}}/;
            matchedResults = result.match(regex);
            result = result.replace(matchedResults[0], await getStoredValue(matchedResults[1].match(storePattern)[1]));
        }
        else{
            matchedResults = result.match(storePattern);
            result = result.replace(matchedResults[0], await getStoredValue(matchedResults[1]));
        }

        if(name.startsWith('/')){
            destination = (await page.evaluate(() => window.location.origin)) + result;
        }
        else{
            destination = result;
        }
    }
    else if(name.startsWith('/')){
        destination = (await page.evaluate(() => window.location.origin)) + name;
    }
    else {
        destination = _getLmsUrl(name);
    }

    try {
        await page.goto(destination, {timeout: 60000, waitUntil: "domcontentloaded"});
    }
    catch(e) {
        console.log(`Navigation step failed ${e}`);
        console.log(`Page title is "${page.url()}"`);
    }
});

When(
    /^I complete new prechecks steps "([^"]*)"$/,
    async function (this: ICustomWorld, prechecksStep: string) {
        const page = this.page!;
        // Single Step
        switch (prechecksStep) {
            case 'DownloadButton':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Download Button']
                );
                await page.waitForTimeout(1000);
                break;
            case 'GetStarted':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Get Started']
                );
                await page.waitForTimeout(1000);
            case 'GetStartedAuto':
                await page.waitForTimeout(1000);
                await page.click(Sites.Archimedes['Prechecks Page'].Continue);
                await page.waitForTimeout(1000);
                break;
            case 'NeedAssistance':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page'][
                        'Need Assistance Continue'
                    ]
                );
                await page.waitForTimeout(1000);
            case 'ExamPrep1':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Exam Prep1 Continue']
                );
                await page.waitForTimeout(1000);
                break;
            case 'ExamPrep2':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Exam Prep2 Continue']
                );
                await page.waitForTimeout(1000);
                break;
            case 'Chatbox':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['I See Chatbox']
                );
                await page.waitForTimeout(1000);
                break;
            case 'ExamRules':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Exam Rules Agree']
                );
                await page.waitForTimeout(1000);
                break;
            case 'RecordingCheck':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page'][
                        'Recording Notice Continue'
                    ]
                );
                await page.waitForTimeout(10000);
                break;
            case 'ExamRules2':
                await page.waitForTimeout(3000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Exam Rules check1']
                );
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Exam Rules check2']
                );
                await page.waitForTimeout(1000);
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Exam Rules Agree']
                );
                await page.waitForTimeout(5000);
                break;
            case 'TakePhoto':
                await page.waitForTimeout(3000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Take Photo']
                );
                await page.waitForTimeout(3000);
                await page.click(Sites.Archimedes['Prechecks Page'].Next);
                await page.waitForTimeout(7000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Take Photo']
                );
                await page.waitForTimeout(3000);
                await page.click(Sites.Archimedes['Prechecks Page'].Next);
                await page.waitForTimeout(5000);
                break;
            case 'VerifyID':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Verify ID']
                );
                await page.waitForTimeout(7000);
                break;
            case 'ExamAssistance':
                await page.waitForTimeout(1000);
                await page.click(
                    Sites.Archimedes['Prechecks Page'][
                        'Exam Assistance Continue'
                    ]
                );
                await page.waitForTimeout(7000);
                break;
            case 'BeginExam':
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Begin Exam']
                );
                await page.waitForTimeout(3000);
            case 'GoToTestingSite':
                await page.waitForTimeout(3000);
                await page.click(
                    Sites.Archimedes['Prechecks Page']['Testing Site Continue']
                );
                await page.waitForTimeout(5000);
        }
    }
);

// /^I (enable|disable) the Proctorless Password Global Setting$/
Given(
    /^I am (user|student|admin|student_advocate) "([^"]*)"$/,
    async function (this: ICustomWorld, userType: string, identifier: string) {
        this.disableStepScreenshot();
        if (userType == 'user') {
            user = await getUserById(identifier);
        } else if (userType == 'local user') {
            if (identifier == 'student') {
                const LOCAL_USER = {
                    email: process.env['LOCAL_USER'],
                    password: process.env['LOCAL_USER_PASSWORD'],
                };
                user = LOCAL_USER;
            } else if (identifier == 'admin') {
                const LOCAL_ADMIN = {
                    email: process.env['LOCAL_ADMIN'],
                    password: process.env['LOCAL_ADMIN_PASSWORD'],
                };
                user = LOCAL_ADMIN;
            }
        } else {
            user = await getUser({
                userType: userType.substring(userType.indexOf(' ') + 1),
                identifier: identifier,
            });
        }
    }
);

Given(
    /^I am a.* (.*) for "(.*)"$/,
    async function (this: ICustomWorld, userType: string, identifier: string) {
        this.disableStepScreenshot();
        if (userType == 'user') {
            user = await getUserById(identifier);
        } else if (userType == 'local user') {
            if (identifier == 'student') {
                const LOCAL_USER = {
                    email: process.env['LOCAL_USER'],
                    password: process.env['LOCAL_USER_PASSWORD'],
                };
                user = LOCAL_USER;
            } else if (identifier == 'admin') {
                const LOCAL_ADMIN = {
                    email: process.env['LOCAL_ADMIN'],
                    password: process.env['LOCAL_ADMIN_PASSWORD'],
                };
                user = LOCAL_ADMIN;
            }
        } else {
            user = await getUser({
                userType: userType.substring(userType.indexOf(' ') + 1),
                identifier: identifier,
            });
        }
    }
);

Given(
    'I am on the {string} page in {string} site',
    function (this: ICustomWorld, pageName: string, siteName: string) {
        this.disableStepScreenshot();
        this.site = siteName || site;
        this.pagename = pageName;
    }
);

Given('I am on the {string}', function (this: ICustomWorld, pageName: string) {
    this.disableStepScreenshot();
    this.pagename = pageName;
});

Given(
    'I am on the {string} page',
    function (this: ICustomWorld, pageName: string) {
        this.disableStepScreenshot();
        this.pagename = pageName;
    }
);

When(
    'I hover over the {string} element',
    async function (this: ICustomWorld, elementName: string) {
        this.page
            .locator(Sites[this.site][this.pagename][elementName]).scrollIntoViewIfNeeded()
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first()
            .hover();
    }
);

When('I refresh the page', async function (this: ICustomWorld) {
    await this.page.reload({waitUntil: 'domcontentloaded'});
});

Then(
    'Url should include {string}',
    async function (this: ICustomWorld, urlToCheck: string) {
        this.disableStepScreenshot();
        const pageTitle = this.page.url();
        if (urlToCheck.includes('_store')) {
            const refName = urlToCheck.replace('_store ', ''); // Extract the reference name
            urlToCheck = await getStoredValue(refName);
        }
        expect(pageTitle.toLowerCase()).toContain(urlToCheck);
    }
);

Then(
    'Url should not include {string}',
    async function (this: ICustomWorld, urlToCheck: string) {
        this.disableStepScreenshot();
        const pageTitle = this.page.url();
        expect(pageTitle.toLowerCase()).not.toContain(urlToCheck);
    }
);

Then(
    'Url should not be {string}',
    async function (this: ICustomWorld, urlToCheck: string) {
        this.disableStepScreenshot();
        if (urlToCheck.includes('_store')) {
            const refName = urlToCheck.replace('_store ', ''); // Extract the reference name
            urlToCheck = await getStoredValue(refName);
        }
        await expect(this.page).not.toHaveURL(urlToCheck);
    }
);

Then(
    'Url should be {string}',
    async function (this: ICustomWorld, urlToCheck: string) {
        this.disableStepScreenshot();
        if (urlToCheck.includes('_store')) {
            const refName = urlToCheck.replace('_store ', ''); // Extract the reference name
            urlToCheck = await getStoredValue(refName);
        }

        await expect(this.page).toHaveURL(urlToCheck);
    }
);

When('I accept alert', async function (this: ICustomWorld) {
    this.page.on('dialog', async (dialog) => {
        await dialog.accept();
    });
});

When('I reject alert', async function (this: ICustomWorld) {
    this.page.on('dialog', async (dialog) => {
        await dialog.dismiss();
    });
});

Given(
    'I type {string} into the {string} field',
    async function (this: ICustomWorld, fieldValue: string, fieldName: string) {
        if (fieldValue.includes('_store')) {
            const refName = fieldValue.replace('_store ', ''); // Extract the reference name
            fieldValue = await getStoredValue(refName);
        }
        if (fieldValue.includes('_my')) {
            const fieldValueArray = fieldValue.split(' ');
            let updatedfieldValue = fieldValueArray[1];
            let myfieldValue = '';
            if (updatedfieldValue === 'email') {
                myfieldValue = user.email;
            } else {
                myfieldValue = user.password;
            }
            if (fieldValue.includes('_store')) {
                const storedContent = fieldValue.split(' ');
                let updatedfieldValue = storedContent[1];
                myfieldValue = await getStoredValue(updatedfieldValue);
            }
            this.page
                .locator(Sites[this.site][this.pagename][fieldName]).scrollIntoViewIfNeeded()
            await this.page
                .locator(Sites[this.site][this.pagename][fieldName])
                .first()
                .fill(myfieldValue);
        }
        else if(fieldValue == ""){
            await this.page
                .locator(Sites[this.site][this.pagename][fieldName]).scrollIntoViewIfNeeded()
            await this.page
                .locator(Sites[this.site][this.pagename][fieldName])
                .first()
                .clear();
        } else {
            await this.page
                .locator(Sites[this.site][this.pagename][fieldName]).scrollIntoViewIfNeeded()
            await this.page
                .locator(Sites[this.site][this.pagename][fieldName])
                .first()
                .fill(fieldValue);
        }
    }
);

Given(
    'I click the {string} element',
    async function (this: ICustomWorld, elementName: string) {
        if (elementName.includes('_store')) {
            const refName = elementName.replace('_store ', ''); // Extract the reference name
            const storedValue = await getStoredValue(refName);
            if (storedValue) {
                await this.page
                .locator(Sites[this.site][this.pagename][storedValue]).scrollIntoViewIfNeeded()
                await this.page
                    .locator(Sites[this.site][this.pagename][storedValue])
                    .first()
                    .click();
            }
        } else {
            const element = this.page.locator(Sites[this.site][this.pagename][elementName]);
            await element.first().hover();
            await element.first().click();
        }
    }
);

Given(
    'I click the {string} element if visible',
    async function (this: ICustomWorld, elementName: string) {
        if (elementName.includes('_store')) {
            const refName = elementName.replace('_store ', ''); // Extract the reference name
            const storedValue = await getStoredValue(refName);
            if (storedValue) {
                const element = await this.page.locator(
                    Sites[this.site][this.pagename][storedValue]
                );
                if (
                    (await element.count()) > 0 &&
                    (await element.isVisible())
                ) {
                    await element.click();
                }
            }
        } else {
            const element = this.page.locator(
                Sites[this.site][this.pagename][elementName]
            );
            if (
                (await element.count()) > 0 &&
                (await element.first().isVisible())
            ) {
                await element.first().click();
            }
        }
    }
);

Given(
    /^I hover over "([^"]*)" and then click "([^"]*)"$/,
    async function (
        this: ICustomWorld,
        hoverElement: string,
        clickElement: string
    ) {
        await this.page
            .locator(Sites[this.site][this.pagename][hoverElement]).scrollIntoViewIfNeeded()
        await this.page
            .locator(Sites[this.site][this.pagename][hoverElement])
            .first()
            .hover();
        await this.page
            .locator(Sites[this.site][this.pagename][clickElement])
            .first()
            .click();
    }
);

When(
    /^I (enable|disable) the Proctorless Password Global Setting$/,
    async function (this: ICustomWorld, status: string) {
        const page: Page = this.page;
        let spectedStatus: boolean;
        await page.goto('https://staging.proctoru.com/settings/edit', {
            waitUntil: 'domcontentloaded',
        });
        if (status == 'enable') {
            spectedStatus = true;
        } else {
            spectedStatus = false;
        }

        let proctorlessPasswordInjectionCheckbox = await page.locator(
            "//input[@id='setting_enable_proctorless_password_injection_configuration']"
        );
        await page.locator(
            "//input[@id='setting_enable_proctorless_password_injection_configuration']"
        ).scrollIntoViewIfNeeded()
        let updateSettingsButton = await page.locator(
            "//input[@value='Update Settings']"
        );
        await page.locator(
            "//input[@value='Update Settings']"
        ).scrollIntoViewIfNeeded()

        if (
            (await proctorlessPasswordInjectionCheckbox.isChecked()) !=
            spectedStatus
        ) {
            await proctorlessPasswordInjectionCheckbox.setChecked(
                spectedStatus
            );
            await updateSettingsButton.click();
            await page.waitForLoadState('domcontentloaded');
            await page.locator("div[role='alert']").scrollIntoViewIfNeeded()
            await expect(page.locator("div[role='alert']")).toContainText(
                'Setting saved.'
            );
        }
    }
);

Given(
    'I check the {string} element',
    async function (this: ICustomWorld, elementName: string) {
        await this.page
        .locator(Sites[this.site][this.pagename][elementName]).scrollIntoViewIfNeeded()
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first()
            .check();
    }
);

Given(
    'I uncheck the {string} element',
    async function (this: ICustomWorld, elementName: string) {
        await this.page
            .locator(Sites[this.site][this.pagename][elementName]).scrollIntoViewIfNeeded()
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first()
            .uncheck();
    }
);

When(
    'I select {string} option from the {string} selector',
    async function (this: ICustomWorld, optionName: string, elementName) {
        if (optionName.includes('_store')) {
            const refName = optionName.replace('_store ', ''); // Extract the reference name
            optionName = await getStoredValue(refName);
        }
        await this.page
        .locator(Sites[this.site][this.pagename][elementName]).scrollIntoViewIfNeeded()
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first()
            .selectOption(optionName);
    }
);

// All instances of this should be replaced with 'I select {string} option from the {string} selector'
// Previous WDIO implementation was to click drown down and then click option as seperate selectors
// Will likely cause failures
When(
    'I click the {string} and then select {string}',
    async function (this: ICustomWorld, elementName, optionName: string) {
        await this.page
        .locator(Sites[this.site][this.pagename][elementName]).scrollIntoViewIfNeeded()
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first()
            .selectOption(optionName);
    }
);

Given(
    'I wait {string} seconds',
    async function (this: ICustomWorld, timeToWait: string) {
        this.disableStepScreenshot();
        const page = this.page!;
        const milliseconds = parseInt(timeToWait) * 1000;
        await this.page.waitForTimeout(milliseconds);
    }
);

Given(
    /^I click the "([^"]*)" element for "([^"]*)" in "([^"]*)" list$/,
    async function (
        this: ICustomWorld,
        element: string,
        searchText: string,
        list: string
    ) {
        let clicked = false;
        const listArray = this.page.locator(
            Sites[this.site][this.pagename][list]
        );
        this.page.locator(
            Sites[this.site][this.pagename][list]
        ).first().scrollIntoViewIfNeeded()
        await expect(listArray.first()).toBeVisible();
        const elementsCount = await listArray.count();
        if (searchText.includes('_store')) {
            const refName = searchText.replace('_store ', ''); // Extract the reference name
            searchText = await getStoredValue(refName);
        }
        for (var i = 0; i < elementsCount && !clicked; i++) {
            const currentElement = listArray.nth(i);
            const innerText = await currentElement.innerText();
            if (innerText.includes(searchText)) {
                await currentElement
                .locator(Sites[this.site][this.pagename][element]).scrollIntoViewIfNeeded()
                await currentElement
                    .locator(Sites[this.site][this.pagename][element])
                    .first()
                    .click();
                clicked = true;

                await this.page.waitForLoadState('domcontentloaded');
            }
        }
    }
);

Given('I clear cookies', async function (this: ICustomWorld) {
    this.disableStepScreenshot();
    await this.page.context().clearCookies();
});

When('I send keys {string}', async function (this: ICustomWorld, keys: string) {
    if (keys.includes('_store')) {
        const refName = keys.replace('_store ', ''); // Extract the reference name
        keys = await getStoredValue(refName);
    }
    await this.page.keyboard.type(keys, { delay: 100 });
});

When('I press {string}', async function (this: ICustomWorld, keys: string) {
    await this.page.keyboard.press(keys);
});

Given(
    'I should see the {string} element',
    async function (this: ICustomWorld, elementName: string) {
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).toBeVisible();
    }
);

Given(
    'I should see the {string} element in frame {string}',
    async function (
        this: ICustomWorld,
        elementName: string,
        iframeName: string
    ) {
        await expect(
            this.page
                .frameLocator(Sites[this.site][this.pagename][iframeName])
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).toBeVisible();
    }
);

Then(
    '{string} element should be visible',
    async function (this: ICustomWorld, elementName: string) {
        //await this.page.waitForLoadState('domcontentloaded');
        await this.page.locator(Sites[this.site][this.pagename][elementName]).first().scrollIntoViewIfNeeded()
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).toBeVisible({timeout: 10000});
    }
);

Then(
    '{string} element should not be visible',
    async function (this: ICustomWorld, elementName: string) {
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).not.toBeVisible();
    }
);

Then(
    '{string} element should be hidden',
    async function (this: ICustomWorld, elementName: string) {
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first()
            .isHidden();
    }
);

Then(
    '{string} element should not be hidden',
    async function (this: ICustomWorld, elementName: string) {
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first()
            .isVisible();
    }
);

Then(
    '{string} element should be checked',
    async function (this: ICustomWorld, elementName: string) {
        await this.page.locator(Sites[this.site][this.pagename][elementName]).first().scrollIntoViewIfNeeded()
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).toBeChecked();
    }
);

Then(
    '{string} element should not be checked',
    async function (this: ICustomWorld, elementName: string) {
        await this.page.locator(Sites[this.site][this.pagename][elementName]).first().scrollIntoViewIfNeeded()
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).not.toBeChecked();
    }
);

Given(
    'I should not see the {string} element',
    async function (this: ICustomWorld, elementName: string) {
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).not.toBeVisible();
    }
);

Then(
    'I should see {string} text',
    async function (this: ICustomWorld, identifier: string) {
        if (identifier.includes('_store')) {
            const refName = identifier.replace('_store ', ''); // Extract the reference name
            identifier = await getStoredValue(refName);
        }
        await this.page.locator(`//*[contains(text(), '${identifier}')]`).first().scrollIntoViewIfNeeded()
        await expect(
            this.page.locator(`//*[contains(text(), '${identifier}')]`).first()
        ).toBeVisible();

    }
);

Then(
    'I should not see {string} text',
    async function (this: ICustomWorld, identifier: string) {
        if (identifier.includes('_store')) {
            const refName = identifier.replace('_store ', ''); // Extract the reference name
            identifier = await getStoredValue(refName);
        }
        await expect(
            this.page.locator(`//*[contains(text(), '${identifier}')]`).first()
        ).not.toBeVisible();

    }
);

When('I log out of Archimedes', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.waitForTimeout(1000);
    await page.goto(config.BASE_URL + 'session/destroy');
});

When(
    'I open new private window {string}',
    async function (this: ICustomWorld, pagename: string) {
        const browser = await chromium.launch(config.privateBrowserOptions);
        const context = await browser.newContext();
        const newPage = await context.newPage();
        if (pagename == 'Archimedes') {
            pagename = config.BASE_URL;
        }
        await newPage.goto(_getLmsUrl(pagename));
        this.page = newPage;
        this.contextCollection.push(context);
    }
);

When(
    'I open new Guardian Browser window {string}',
    async function (this: ICustomWorld, pagename: string) {
        const electronApp = await _electron.launch(config.guardianBrowserOptions);
        var newPage = await electronApp.firstWindow();
        await page.waitForTimeout(3000)
        if (pagename == 'Archimedes') {
            pagename = config.BASE_URL;
        }
        await newPage.goto(_getLmsUrl(pagename));
        this.page = newPage;
        this.contextCollection.push(electronApp.context());
    }
);

When(
    'I open new window {string}',
    async function (this: ICustomWorld, pagename: string) {
        let destination: string;

        if(pagename == 'Archimedes'){
            destination = config.BASE_URL;
        }
        else if(pagename.includes('_store')){
            const storePattern = /_store\s([^ ]+(.*))/;
            let result = pagename;
            let matchedResults: RegExpMatchArray;

            if(result.includes('{{')){
                let regex = /{{(.*)}}/;
                matchedResults = result.match(regex);
                result = result.replace(matchedResults[0], await getStoredValue(matchedResults[1].match(storePattern)[1]));
            }
            else{
                matchedResults = result.match(storePattern);
                result = result.replace(matchedResults[0], await getStoredValue(matchedResults[1]));
            }

            if(pagename.startsWith('/')){
                destination = (await page.evaluate(() => window.location.origin)) + result;
            }
            else{
                destination = result;
            }
        }
        else if(pagename.startsWith('/')){
            destination = (await page.evaluate(() => window.location.origin)) + pagename;
        }
        else {
            destination = _getLmsUrl(pagename);
        }

        const newPage = await this.context.newPage();
        await newPage.goto(destination, {timeout: 60000, waitUntil: "domcontentloaded"});
        this.page = newPage;
    }
);

Then(
    /^Window with title "(.*)" should be (.*)/,
    async function (
        this: ICustomWorld,
        windowName: string,
        statusExpected: string
    ) {
        this.disableStepScreenshot();
        if (windowName.includes('_store')) {
            const refName = windowName.replace('_store ', '');
            windowName = await getStoredValue(refName);
        }

        let found = false;

        for (const page of this.context.pages()) {
            const pageTitle = await page.title();

            if (pageTitle.includes(windowName)) {
                found = true;
                break;
            }
        }

        if (statusExpected === 'closed') {
            if (!found) {
                // If window is closed, it shouldn't be found
                console.log(`Window with title "${windowName}" is closed.`);
            } else {
                throw new Error(
                    `Window with title "${windowName}" is still open.`
                );
            }
        } else if (statusExpected === 'opened') {
            if (found) {
                console.log(`Window with title "${windowName}" is open.`);
            } else {
                throw new Error(
                    `Window with title "${windowName}" is not open.`
                );
            }
        }
    }
);

When(
    'I click the View Appointment Button',
    async function (this: ICustomWorld) {
        await this.page.waitForLoadState('domcontentloaded');

        // Check if the Session Status is visible
        await expect(
            this.page.locator('//*[contains(text(),"Session Status")]').first()
        ).toBeVisible();
        // Check if the View Appointment Button is visible and click it
        const viewAppointmentButton = this.page
            .locator(
                Sites.Archimedes['Session Reservation'][
                    'View Appointment Button'
                ]
            )
            .first();
        if (await viewAppointmentButton.isVisible()) {
            const firstAppointmentLink =
                await viewAppointmentButton.getAttribute('href');
            if (firstAppointmentLink) {
                await this.page.goto(
                    'https://staging.proctoru.com/' + firstAppointmentLink
                );
                // Check if page navigation is successful
            }
        }

        // Check if Active Appointment dropdown is visible and click the appointment link
        const activeAppointmentDropdown = this.page
            .locator(
                '//div[@class="dropdown-menu"]//div[contains(text(),"Active Appointment")]'
            )
            .first();
        if ((await activeAppointmentDropdown.count()) > 0) {
            const firstAppointmentLink = await this.page
                .locator(
                    '//div[@class="dropdown-menu"]//a[contains(@href,"fulfillments/")]'
                )
                .first()
                .getAttribute('href');
            if (firstAppointmentLink) {
                await this.page.goto(
                    'https://staging.proctoru.com/' + firstAppointmentLink
                );
                // Check if page navigation is successful
            }
        }
    }
);

When(
    'I complete {string} flightpath steps',
    async function (this: ICustomWorld, numberOfFlightPathSteps: string) {
        const steps = parseInt(numberOfFlightPathSteps);

        const listener = async (dialog) => await dialog.accept();

        // Handle any Chrome dialogues that may appear
        this.page.on('dialog', listener);

        // Iterate over the specified number of flightpath steps
        // steps - 1 because the first step it's already complete
        for (let i = 0; i < steps - 1; i++) {
            this.page
                .locator(Sites.Archimedes.Fulfillment['Checkbox Element'])
                .nth(i).scrollIntoViewIfNeeded()
            // Click the next uncompleted flightpath step checkbox
            const checkbox = this.page
                .locator(Sites.Archimedes.Fulfillment['Checkbox Element'])
                .nth(i);
            await checkbox.click();

            // Wait for the next uncompleted step to appear
            // await this.page.waitForSelector(
            //     Sites.Archimedes.Fulfillment['Complete Step Strong Text']
            // );

            await page.waitForTimeout(3000);
        }

        this.page.off('dialog', listener);
    }
);

When('I click Sign In on Archimedes', async function (this: ICustomWorld) {
    await this.page.click(Sites.Archimedes.Login['Sign In Button']);
    const termsOfServiceAccept = this.page.locator(Sites.Archimedes["Terms and Conditions"]["Sign In Button"]);
    const termsOfServiceCheckbox = this.page.locator(Sites.Archimedes["Terms and Conditions"]["Agree to ToS checkbox"]);

    const oldtermsOfServiceAccept = this.page.locator(Sites.Archimedes["Terms and Conditions"]["Accept Terms button"]);
    const oldtermsOfServiceCheckbox = this.page.locator('Sites.Archimedes["Terms and Conditions"]["Old Agree to ToS checkbox"]');

    if (await termsOfServiceAccept.count() > 0) {
        await termsOfServiceCheckbox.scrollIntoViewIfNeeded()
        await termsOfServiceCheckbox.click();
        await termsOfServiceAccept.scrollIntoViewIfNeeded();
        await termsOfServiceAccept.click();
    }
    else if (await oldtermsOfServiceAccept.count() > 0) {
        await oldtermsOfServiceCheckbox.scrollIntoViewIfNeeded();
        await oldtermsOfServiceCheckbox.click();
        await oldtermsOfServiceAccept.scrollIntoViewIfNeeded();
        await oldtermsOfServiceAccept.click();
    }
    else {
        await this.page.locator(Sites.Archimedes.Login['System Message']).first().scrollIntoViewIfNeeded()
        await expect(
            this.page.locator(Sites.Archimedes.Login['System Message']).first()
        ).toContainText('You have successfully signed in.');
    }
});

When('Admin goes to Fulfillment Page', async function (this: ICustomWorld) {
    await this.page
        .locator(Sites.Archimedes.Login['Username Input'])
        .first().scrollIntoViewIfNeeded()
    await this.page
        .locator(Sites.Archimedes.Login['Username Input'])
        .first()
        .fill('aqa_super71@meazurelearning.com');
        await this.page
        .locator(Sites.Archimedes.Login['Password Input'])
        .first().scrollIntoViewIfNeeded()
    await this.page
        .locator(Sites.Archimedes.Login['Password Input'])
        .first()
        .fill(userPassword);
    await this.page.click(Sites.Archimedes.Login['Sign In Button']);
    await this.page.waitForLoadState('domcontentloaded');
    if ((await this.page.locator('#user_terms').count()) > 0) {
        await this.page.locator('#user_terms').scrollIntoViewIfNeeded()
        await this.page.locator('#user_terms').click()
        await this.page.locator('input[value="Accept Terms"]').scrollIntoViewIfNeeded()
        await this.page.locator('input[value="Accept Terms"]').click()
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.locator(Sites.Archimedes.Login['System Message']).first().scrollIntoViewIfNeeded()
        await expect(
            this.page.locator(Sites.Archimedes.Login['System Message']).first()
        ).toContainText('Terms of Service accepted');
    } else {
        await this.page.locator(Sites.Archimedes.Login['System Message']).first().scrollIntoViewIfNeeded()
        await expect(
            this.page.locator(Sites.Archimedes.Login['System Message']).first()
        ).toContainText('You have successfully signed in.');
    }
});

// @when(/^(Admin|Proctor) goes to Fulfillment Page$/)
// WILL NEED ACCESS TO ENVIRONMENT FILE FOR USER PASSWORD
When('Admin sets start time to now', async function (this: ICustomWorld) {
    // Set dialog listener
    const listener = async (dialog) => await dialog.accept();
    // Handle any Chrome dialogues that may appear
    this.page.on('dialog', listener);
    await this.page
        .locator(
            '//div[contains(@class,"student-reservations-app")]//table//tr[contains(@class,"exam-row")]'
        ).scrollIntoViewIfNeeded();
    const userFulfillmentID = await this.page
        .locator(
            '//div[contains(@class,"student-reservations-app")]//table//tr[contains(@class,"exam-row")]'
        )
        .first()
        .getAttribute('data-fulfillment');
    const proctorFulfillmentURL =
        config.BASE_URL + '/fulfillments/' + userFulfillmentID;
    await page.goto(config.BASE_URL + 'session/destroy');
    await page.goto(config.BASE_URL);
    await this.page
        .locator(Sites.Archimedes.Login['Username Input'])
        .first().scrollIntoViewIfNeeded()
    await this.page
        .locator(Sites.Archimedes.Login['Username Input'])
        .first()
        .fill('aqa_super71@meazurelearning.com');
        await this.page
        .locator(Sites.Archimedes.Login['Password Input'])
        .first().scrollIntoViewIfNeeded()
    await this.page
        .locator(Sites.Archimedes.Login['Password Input'])
        .first()
        .fill(userPassword);
    await this.page.locator(Sites.Archimedes.Login['Sign In Button']).click()
    await this.page.waitForLoadState('domcontentloaded');
    if ((await this.page.locator('#user_terms').count()) > 0) {
        await this.page.locator('#user_terms').scrollIntoViewIfNeeded()
        await this.page.locator('#user_terms').click()
        await this.page.locator('input[value="Accept Terms"]').scrollIntoViewIfNeeded()
        await this.page.locator('input[value="Accept Terms"]').click()
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.locator(Sites.Archimedes.Login['System Message']).first().scrollIntoViewIfNeeded()
        await expect(
            this.page.locator(Sites.Archimedes.Login['System Message']).first()
        ).toContainText('Terms of Service accepted');
    } else {
        await this.page.locator(Sites.Archimedes.Login['System Message']).first().scrollIntoViewIfNeeded()
        await expect(
            this.page.locator(Sites.Archimedes.Login['System Message']).first()
        ).toContainText('You have successfully signed in.');
    }
    await page.goto(proctorFulfillmentURL);
    await this.page
        .locator('//*[contains(text(), "Update Start Time to Now")]')
        .first().scrollIntoViewIfNeeded()
    const updateStartTimeButton = this.page
        .locator('//*[contains(text(), "Update Start Time to Now")]')
        .first();
    await updateStartTimeButton.click();
    await page.waitForLoadState('domcontentloaded')

    await page.goto(config.BASE_URL + 'session/destroy');
    await page.goto(config.BASE_URL);
    const studentID = await _my('email');
    const studentPassword = await _my('password');
    await this.page
    .locator(Sites.Archimedes.Login['Username Input'])
    .first().scrollIntoViewIfNeeded()
    await this.page
        .locator(Sites.Archimedes.Login['Username Input'])
        .first()
        .fill(studentID.toString());
    await this.page
        .locator(Sites.Archimedes.Login['Password Input'])
        .first().scrollIntoViewIfNeeded()
    await this.page
        .locator(Sites.Archimedes.Login['Password Input'])
        .first()
        .fill(studentPassword.toString());
    await this.page.click(Sites.Archimedes.Login['Sign In Button']);
    //await this.page.waitForLoadState('domcontentloaded');

    // Remove dialog listener
    this.page.off('dialog', listener);
});

When(
    '{string} element text should contain {string}',
    async function (
        this: ICustomWorld,
        elementName: string,
        textValue: string
    ) {
        if (textValue.includes('_store')) {
            const refName = textValue.replace('_store ', ''); // Extract the reference name
            textValue = await getStoredValue(refName);
        }
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).toContainText(textValue);
    }
);

When(
    '{string} element text should not contain {string}',
    async function (
        this: ICustomWorld,
        elementName: string,
        textValue: string
    ) {
        this.page.waitForLoadState('domcontentloaded');
        if (textValue.includes('_store')) {
            const refName = textValue.replace('_store ', ''); // Extract the reference name
            textValue = await getStoredValue(refName);
        }
        await this.page
        .locator(Sites[this.site][this.pagename][elementName])
        .first().scrollIntoViewIfNeeded()
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).not.toContainText(textValue);
    }
);

When(
    '{string} element text should be {string}',
    async function (
        this: ICustomWorld,
        elementName: string,
        textValue: string
    ) {
        if (textValue.includes('_store')) {
            const refName = textValue.replace('_store ', ''); // Extract the reference name
            textValue = await getStoredValue(refName);
        }
        await this.page
        .locator(Sites[this.site][this.pagename][elementName])
        .first().scrollIntoViewIfNeeded()
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).toHaveText(textValue);
    }
);

When(
    '{string} element text should not be {string}',
    async function (
        this: ICustomWorld,
        elementName: string,
        textValue: string
    ) {
        if (textValue.includes('_store')) {
            const refName = textValue.replace('_store ', ''); // Extract the reference name
            textValue = await getStoredValue(refName);
        }
        await this.page
        .locator(Sites[this.site][this.pagename][elementName])
        .first().scrollIntoViewIfNeeded()
        await expect(
            this.page
                .locator(Sites[this.site][this.pagename][elementName])
                .first()
        ).not.toHaveText(textValue);
    }
);

When(
    'Every {string} element text should contain {string}',
    async function (
        this: ICustomWorld,
        elementName: string,
        textValue: string
    ) {
        if (textValue.includes('_store')) {
            const refName = textValue.replace('_store ', ''); // Extract the reference name
            textValue = await getStoredValue(refName);
        }
        await this.page
        .locator(Sites[this.site][this.pagename][elementName])
        .first().scrollIntoViewIfNeeded()
        const elements = this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first();

        const count = await elements.count();

        for (let i = 0; i < count; i++) {
            const elementText = await elements.nth(i).innerText();
            expect(elementText).toContain(textValue);
        }
    }
);

When(
    'Every {string} element text should not contain {string}',
    async function (
        this: ICustomWorld,
        elementName: string,
        textValue: string
    ) {
        if (textValue.includes('_store')) {
            const refName = textValue.replace('_store ', ''); // Extract the reference name
            textValue = await getStoredValue(refName);
        }
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first().scrollIntoViewIfNeeded()
        const elements = this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first();

        const count = await elements.count();

        for (let i = 0; i < count; i++) {
            const elementText = await elements.nth(i).innerText();
            expect(elementText).not.toContain(textValue);
        }
    }
);

When(
    'Every {string} element text should be {string}',
    async function (
        this: ICustomWorld,
        elementName: string,
        textValue: string
    ) {
        if (textValue.includes('_store')) {
            const refName = textValue.replace('_store ', ''); // Extract the reference name
            textValue = await getStoredValue(refName);
        }
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first().scrollIntoViewIfNeeded()
        const elements = this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first();
        const count = await elements.count();

        for (let i = 0; i < count; i++) {
            const elementText = await elements.nth(i).innerText();
            expect(elementText).toBe(textValue);
        }
    }
);

When(
    'Every {string} element text should not be {string}',
    async function (
        this: ICustomWorld,
        elementName: string,
        textValue: string
    ) {
        if (textValue.includes('_store')) {
            const refName = textValue.replace('_store ', ''); // Extract the reference name
            textValue = await getStoredValue(refName);
        }
        await this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first().scrollIntoViewIfNeeded()
        const elements = this.page
            .locator(Sites[this.site][this.pagename][elementName])
            .first();
        const count = await elements.count();

        for (let i = 0; i < count; i++) {
            const elementText = await elements.nth(i).innerText();
            expect(elementText).not.toBe(textValue);
        }
    }
);

Then('I close the browser', async function (this: ICustomWorld) {
    this.disableStepScreenshot();
    this.page.close();
});

Then(
    'I close the {string} window',
    async function (this: ICustomWorld, windowName: string) {
        this.disableStepScreenshot();
        let pageId = 0;
        for (const page of this.context.pages()) {
            const pageTitle = await page.title();
            if (pageTitle === windowName) {
                // Close the window with the matching title
                await page.close();
            }
        }
    }
);

Then('I start Blackboard Exam', async function (this: ICustomWorld) {
    const page = this.page!;

    if (
        await page
            .locator(Sites.BlackboardLatest.Common.Continue)
            .first()
            .isVisible()
    ) {
        await page
            .locator(Sites.BlackboardLatest.Common.Continue)
            .first().scrollIntoViewIfNeeded()
        await page
            .locator(Sites.BlackboardLatest.Common.Continue)
            .first()
            .click();
    }
    if (
        await page
            .locator(Sites.BlackboardLatest.Common['Retake Assessments'])
            .first()
            .isVisible()
    ) {
        await page
            .locator(Sites.BlackboardLatest.Common['Retake Assessments'])
            .first().scrollIntoViewIfNeeded()
        await page
            .locator(Sites.BlackboardLatest.Common['Retake Assessments'])
            .first()
            .click();
    }
    if (
        await page
            .locator(Sites.BlackboardLatest.Common.Begin)
            .first()
            .isVisible()
    ) {
        await page
            .locator(Sites.BlackboardLatest.Common.Begin)
            .first().scrollIntoViewIfNeeded()
        await page.locator(Sites.BlackboardLatest.Common.Begin).first().click();
        if (
            await page
                .locator(Sites.BlackboardLatest.Common['Retake Assessments'])
                .first()
                .isVisible()
        ) {
            await page
                .locator(Sites.BlackboardLatest.Common['Retake Assessments'])
                .first().scrollIntoViewIfNeeded()
            await page
                .locator(Sites.BlackboardLatest.Common['Retake Assessments'])
                .first()
                .click();
        }
    }
});

Then(
    'I find session for the {string} from {string} for {string}',
    async function (
        this: ICustomWorld,
        testName: string,
        institutionName: string,
        term: string
    ) {

        await this.page
            .locator(
                Sites.Archimedes['Student Select Exam']['Institution Dropdown']
            )
            .first()
            .selectOption(institutionName);

        await this.page
            .locator(Sites.Archimedes['Student Select Exam']['Term Dropdown'])
            .first()
            .click();

        await this.page
            .locator(
                Sites.Archimedes['Student Select Exam']['Expanded Input Field']
            )
            .first()
            .type(term);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.page
            .locator(Sites.Archimedes['Student Select Exam']['Exam Dropdown'])
            .first()
            .click();

        await this.page
            .locator(
                Sites.Archimedes['Student Select Exam']['Expanded Input Field']
            )
            .first()
            .type(testName);
        await this.page.keyboard.press('Enter');
        await this.page
            .locator(
                Sites.Archimedes['Student Select Exam']['Find Sessions Button']
            )
            .first()
            .click();
        // await expect(
        //     this.page.locator(
        //         Sites.Archimedes['Student Schedule Session'][
        //             'Select Data Title'
        //         ]
        //     )
        // ).toBeVisible();
    }
);

When(
    'I cancel all sessions for user {string} with session status {string}',
    async function (
        this: ICustomWorld,
        userName: string,
        sessionStatus: string
    ) {
        if (userName.includes('_store')) {
            const refName = userName.replace('_store ', '');
            userName = await getStoredValue(refName);
        }
        const page = this.page!;
        await this.page.goto('https://staging.proctoru.com/reservations');
        await this.page
            .locator(Sites.Archimedes['All Sessions']['Search Box'])
            .first()
            .type(userName);
        await this.page
            .locator(Sites.Archimedes['All Sessions']['Status Dropdown'])
            .first()
            .selectOption(sessionStatus);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('domcontentloaded');
        const searchPage = this.page.url();

        const tableElements =
            '//table//td//a[contains(@href, "proctoru.com/reservations")]';
        const count = await this.page.locator(tableElements).count();
        if (count > 0) {
            for (var i = 1; i <= count; i++) {
                await this.page.keyboard.press('Enter');
                await this.page
                    .locator(
                        Sites.Archimedes['All Sessions']['First Result Link']
                    )
                    .first()
                    .click();
                //this.page.waitForTimeout(4000);
                await this.page.waitForLoadState('domcontentloaded');

                // //*[@class='float-right']//*[contains(@href, "/fulfillments/")]
                const fulfillmentPage = await this.page
                    .locator(
                        "//*[@class='float-right']//*[contains(@href, '/fulfillments/')]"
                    )
                    .first()
                    .getAttribute('href');
                await this.page.goto(
                    'https://staging.proctoru.com' + fulfillmentPage
                );
                await this.page
                    .locator(
                        Sites.Archimedes.Fulfillment[
                            'Cancel Appointment Button'
                        ]
                    )
                    .first()
                    .click();
                await this.page
                    .locator(
                        Sites.Archimedes.Fulfillment['Cancel Submit Button']
                    )
                    .first()
                    .click();
                await this.page.goto(searchPage, {waitUntil: 'domcontentloaded'})
                await this.page
                    .locator(Sites.Archimedes['All Sessions']['Search Box'])
                    .first()
                    .type(userName);
                await this.page
                    .locator(
                        Sites.Archimedes['All Sessions']['Status Dropdown']
                    )
                    .first()
                    .selectOption(sessionStatus);
                await this.page.keyboard.press('Enter');
            }
        }
        await page.goto(config.BASE_URL + 'session/destroy');
    }
);

Then(
    '{string} element count should be {string}',
    async function (
        this: ICustomWorld,
        selector: string,
        expectedCount: string
    ) {
        if (expectedCount.includes('_store')) {
            const refName = expectedCount.replace('_store ', '');
            expectedCount = await getStoredValue(refName);
        }
        const elements = this.page.locator(
            Sites[this.site][this.pagename][selector]
        );
        await this.page.locator(
            Sites[this.site][this.pagename][selector]
        ).first().scrollIntoViewIfNeeded()

        const actualCount = await elements.count();

        if (actualCount !== Number(expectedCount)) {
            throw new Error(
                `Expected ${expectedCount} "${selector}" elements, but found ${actualCount}`
            );
        }
    }
);

Then(
    /^"([^"]*)" element (should|should not) be enabled$/,
    async function(
        this: ICustomWorld,
        selector: string,
        action: string
    ) {
        this.page.locator(
            Sites[this.site][this.pagename][selector]
        ).first().scrollIntoViewIfNeeded()
        const element = this.page.locator(
            Sites[this.site][this.pagename][selector]
        ).first();

        if (action == 'should') {
            await expect(element).toBeEnabled();
        }
        else{
            await expect(element).not.toBeEnabled();
        }
    }
);

When('I disable flipper', async function (this: ICustomWorld) {
    const page: Page = this.page;
    await page
        .locator(
            '//span[@title="Disable for everyone by clearing all percentages, groups and actors."]'
        )
        .first().scrollIntoViewIfNeeded()
    const disableForEveryone = await page
        .locator(
            '//span[@title="Disable for everyone by clearing all percentages, groups and actors."]'
        )
        .first();
    // Only exists if multiple appointments in list
    if (disableForEveryone && (await disableForEveryone.isVisible())) {
        await disableForEveryone.click();
    }
});

When(
    'I disable the {string} flipper for {string}',
    async function (this: ICustomWorld, flipper: string, target: number) {
        const page = this.page!;
        await page.goto(
            'https://staging.proctoru.com/internal/flipper/features/' + flipper
        );

        const disableTargetFlipper = `//button[@title="Disable ${target}"]`;
        if (await page.locator(disableTargetFlipper).first().isVisible()) {
            await page.locator(disableTargetFlipper).first().scrollIntoViewIfNeeded()
            await page.locator(disableTargetFlipper).first().click();
        }
    }
);

When(
    'I enable the {string} flipper for {string}',
    async function (this: ICustomWorld, flipper: string, target: string) {
        const page = this.page;
        const addAnActorButton = '//button[contains(text(),"Add an actor")]';
        const addActorConfirm = '//input[@value="Add Actor"]';
        const flipperIDField = '//input[@placeholder="a flipper id"]';
        await page.goto(
            'https://staging.proctoru.com/internal/flipper/features/' + flipper
        );

        const disableTargetFlipper = `//button[@title="Disable ${target}"]`;
        if (await page.locator(disableTargetFlipper).first().isHidden()) {
            await page.waitForTimeout(3000);
            await page.locator(addAnActorButton).first().scrollIntoViewIfNeeded()
            await page.locator(addAnActorButton).first().click();
            await page.locator(flipperIDField).first().scrollIntoViewIfNeeded()
            await page.locator(flipperIDField).first().fill(target.toString());
            await page.locator(addActorConfirm).first().scrollIntoViewIfNeeded()
            await page.locator(addActorConfirm).first().click();
        }
    }
);

Then(
    'I should see {string} for each {string} element',
    async function (this: ICustomWorld, text: string, elementToCheck: string) {
        const page = this.page;
        const elements = this.page.locator(
            Sites[this.site][this.pagename][elementToCheck]
        );

        const count = elements.count();
        for (var i = 0; i < (await count); i++) {
            await elements.nth(i).scrollIntoViewIfNeeded()
            const elementText = await elements.nth(i).innerText();
            expect(elementText).toContain(text);
        }
    }
);

Then(
    /^"([^"]*)" element attribute "([^"]*)" (should|should not) (be|include) "([^"]*)"$/,
    async function (
        this: ICustomWorld,
        elementReference,
        attributeName: string,
        action: string,
        action2: string,
        expectedString: string
    ) {
        if (expectedString.includes('_store')) {
            const refName = expectedString.replace('_store ', '');
            expectedString = await getStoredValue(refName);
        }
        const page = this.page;
        var elementAttribute = await this.page
            .locator(Sites[this.site][this.pagename][elementReference])
            .first()
            .getAttribute(attributeName);

        if (action == 'should') {
            if (action2 == 'be') {
                expect(elementAttribute).toBe(expectedString);
            }
            if (action2 == 'include') {
                expect(elementAttribute).toContain(expectedString);
            }
        }
        if (action == 'should not') {
            if (action2 == 'be') {
                expect(elementAttribute).not.toBe(expectedString);
            }
            if (action2 == 'include') {
                expect(elementAttribute).not.toContain(expectedString);
            }
        }
    }
);

Then(
    /^The value of "([^"]*)" (should|should not) be empty$/,
    async function (
        this: ICustomWorld,
        element: string,
        action: string) {
            const page = this.page;
            if (action == 'should') {
                await page.locator(Sites[this.site][this.pagename][element]).first().scrollIntoViewIfNeeded()
                await expect(page.locator(Sites[this.site][this.pagename][element]).first()).toBeEmpty();
            }
            if (action == 'should not') {
                await page.locator(Sites[this.site][this.pagename][element]).first().scrollIntoViewIfNeeded()
                await expect(page.locator(Sites[this.site][this.pagename][element]).first()).not.toBeEmpty();
            }
    }
);

Then(
    /^The element "([^"]*)" (should|should not) be editable$/,
    async function (
        this: ICustomWorld,
        element: string,
        action: string) {
            const page = this.page;
            if (action == 'should') {
                await page.locator(Sites[this.site][this.pagename][element]).first().scrollIntoViewIfNeeded()
                await expect(page.locator(Sites[this.site][this.pagename][element]).first()).toBeEditable();
            }
            if (action == 'should not') {
                page.locator(Sites[this.site][this.pagename][element]).first().scrollIntoViewIfNeeded()
                await expect(page.locator(Sites[this.site][this.pagename][element]).first()).not.toBeEditable();
            }
    }
);

Then(
    /^The value of "([^"]*)" should (be|contain) "([^"]*)"$/,
    async function (
        this: ICustomWorld,
        value: string,
        action: string,
        expectedString: string
    ) {
        if (value.includes('_getCurrentUrl')) {
            value = await _getCurrentURL(this.page);
        } else {
            const selector = Sites[this.site][this.pagename][value];
            const element = this.page.locator(selector).first();
            this.page.locator(selector).first().scrollIntoViewIfNeeded()
            value =
                (await element.getAttribute('value')) ||
                (await element.textContent());
        }

        if (expectedString.includes('_store')) {
            const refName = expectedString.replace('_store ', '');
            expectedString = await getStoredValue(refName);
        }
        if (action == 'contain') {
            expect(value).toContain(expectedString);
        }
        if (action == 'be') {
            expect(value).toBe(expectedString);
        }
    }
);

Then(
    /^Current tab title should be "([^"]*)"$/,
    async function (this: ICustomWorld, title: string) {
        this.disableStepScreenshot();
        const page = this.page;
        await page.waitForLoadState('domcontentloaded');

        const tabTitle = await page.title();
        expect(tabTitle).toBe(title);
    }
);

Then(/^I resize the window$/, async function (this: ICustomWorld) {
    const page = this.page;
    await page.setViewportSize({ width: 1280, height: 720 });
});

Then(
    'I type {string} into the {string} field in frame {string}',
    async function (
        this: ICustomWorld,
        fieldValue: string,
        fieldName: string,
        frameSelector: string
    ) {
        if (fieldValue.includes('_store')) {
            const refName = fieldValue.replace('_store ', ''); // Extract the reference name
            fieldValue = await getStoredValue(refName);
        }
        if (fieldValue.includes('_my')) {
            const fieldValueArray = fieldValue.split(' ');
            let updatedfieldValue = fieldValueArray[1];
            let myfieldValue = '';
            if (updatedfieldValue === 'email') {
                myfieldValue = user.email;
            } else {
                myfieldValue = user.password;
            }
            if (fieldValue.includes('_store')) {
                const storedContent = fieldValue.split(' ');
                let updatedfieldValue = storedContent[1];
                myfieldValue = await getStoredValue(updatedfieldValue);
            }
            await this.page
                .frameLocator(Sites[this.site][this.pagename][frameSelector])
                .locator(Sites[this.site][this.pagename][fieldName])
                .first().scrollIntoViewIfNeeded()
            await this.page
                .frameLocator(Sites[this.site][this.pagename][frameSelector])
                .locator(Sites[this.site][this.pagename][fieldName])
                .first()
                .click();
                await this.page
                .frameLocator(Sites[this.site][this.pagename][frameSelector])
                .locator(Sites[this.site][this.pagename][fieldName])
                .first().scrollIntoViewIfNeeded()
            await this.page
                .frameLocator(Sites[this.site][this.pagename][frameSelector])
                .locator(Sites[this.site][this.pagename][fieldName])
                .first()
                .fill(myfieldValue);
        }
        if(fieldValue == ""){
            await this.page
            .frameLocator(Sites[this.site][this.pagename][frameSelector])
            .locator(Sites[this.site][this.pagename][fieldName])
            .first().scrollIntoViewIfNeeded()
            await this.page
                .frameLocator(Sites[this.site][this.pagename][frameSelector])
                .locator(Sites[this.site][this.pagename][fieldName])
                .first()
                .clear();
        } else {
            await this.page
            .frameLocator(Sites[this.site][this.pagename][frameSelector])
            .locator(Sites[this.site][this.pagename][fieldName])
            .first().scrollIntoViewIfNeeded()
            await this.page
                .frameLocator(Sites[this.site][this.pagename][frameSelector])
                .locator(Sites[this.site][this.pagename][fieldName])
                .first()
                .click();
                await this.page
                .frameLocator(Sites[this.site][this.pagename][frameSelector])
                .locator(Sites[this.site][this.pagename][fieldName])
                .first().scrollIntoViewIfNeeded()
            await this.page
                .frameLocator(Sites[this.site][this.pagename][frameSelector])
                .locator(Sites[this.site][this.pagename][fieldName])
                .first()
                .fill(fieldValue);
        }
    }
);

Then(
    /^Date "([^"]*)" should be (less than|less than or equal to|greater than|greater than or equal to|equal to) date "([^"]*)"$/,
    async function (this: ICustomWorld, date, action: string, date2) {
        if (date.includes('_store')) {
            const refName = date.replace('_store ', ''); // Extract the reference name
            date = await getStoredValue(refName);
        }
        date = new Date(date!);

        if (date2.includes('_store')) {
            const refName = date2.replace('_store ', ''); // Extract the reference name
            date2 = await getStoredValue(refName);
        }
        date2 = new Date(date2!);

        console.log("date: " + date);
        console.log("date2: " + date2);
        console.log("date > date2: " + (date > date2));
        if (action == 'less than') {
            expect((date < date2)).toBeTruthy();
        }
        if (action == 'less than or equal to') {
            expect(date <= date2).toBeTruthy();
        }
        if (action == 'greater than') {
            expect((date > date2)).toBeTruthy();
        }
        if (action == 'greater than or equal to') {
            expect(date >= date2).toBeTruthy();
        }
        if (action == 'equal to') {
            expect(date = date2).toBeTruthy();
        }
    }
);

Then(
    /^Amount "([^"]*)" should be (less than|less than or equal to|greater than|greater than or equal to|equal to) amount "([^"]*)"$/,
    async function (this: ICustomWorld, amount, action: string, amount2) {
        const page = this.page;

        const stripNonNumeric = (str) => str.replace(/[^\d]/g, '');

        if (amount.includes('_store')) {
            const refName = amount.replace('_store ', ''); // Extract the reference name
            amount = await getStoredValue(refName);
        }
        if(amount.includes("$"))
            amount = amount.replace('$', '');
        amount = parseInt(amount);

        if (amount2.includes('_store')) {
            const refName = amount2.replace('_store ', ''); // Extract the reference name
            amount2 = await getStoredValue(refName);
        }
        if(amount2.includes("$"))
            amount = amount.replace('$', '');
        amount2 = parseInt(amount2);

        if (action == 'less than') {
            expect(amount).toBeLessThan(amount2);
        }
        if (action == 'less than or equal to') {
            expect(amount).toBeLessThanOrEqual(amount2);
        }
        if (action == 'greater than') {
            expect(amount).toBeGreaterThan(amount2);
        }
        if (action == 'greater than or equal to') {
            expect(amount).toBeGreaterThanOrEqual(amount2);
        }
        if (action == 'equal to') {
            expect(amount).toEqual(amount2);
        }
    }
);

Then(
    /^Click Export and file "([^"]*)" should be downloaded$/,
    async function (this: ICustomWorld, fileTitle: string) {
        this.disableStepScreenshot();
        const page = this.page;

        const listener = async (download: Download) => {
            expect(download.suggestedFilename()).toContain(fileTitle);
        };

        page.on('download', listener);

        const downloadPromise = page.waitForEvent('download', {
            timeout: 120000,
        });
        await page
            .locator(Sites.Archimedes[this.pagename]['Export Button'])
            .first().scrollIntoViewIfNeeded()
        await page
            .locator(Sites.Archimedes[this.pagename]['Export Button'])
            .first()
            .click();

        const download = await downloadPromise;

        await download.saveAs(_downloadDir(download.suggestedFilename()));
    }
);

Then(
    /^Downloaded (csv|xlsx) file "([^"]*)" headers should contain "([^"]*)"$/,
    async function (this: ICustomWorld, fileType: string, fileName: string, headersList) {
        this.disableStepScreenshot();
        if (fileType == 'csv') {
            return await verifyCsvHeaders(
                fileName,
                _downloadDir(fileName),
                headersList.split(',').map((l) => l.trim())
            );
        } else if (fileType == 'xlsx') {
            return await verifyXlsxHeaders(
                fileName,
                _downloadDir(fileName),
                headersList.split(',').map((l) => l.trim())
            );
        }
    }
);

Then('I pause for {int} milliseconds', async function (this: ICustomWorld, milliseconds: number) {
    this.disableStepScreenshot();
    await new Promise((resolve) => setTimeout(resolve, milliseconds));
});

// This replaces step from old feature file: Then {} element should be selected
Then(
    'I should see the {string} selected in {string} element',
    async function (
        this: ICustomWorld,
        option: string,
        dropdownElement: string
    ) {
        const page = this.page;
        const selector = Sites[this.site][this.pagename][dropdownElement];

        if (option.includes('_store')) {
            const refName = option.replace('_store ', '');
            if(refName.includes('_getDateDay')){
                const date = refName.replace('_getDateDay ', '');
                option = new Date(await getStoredValue(date)!).toLocaleString('default', { day: 'numeric' });
            }
            else if(refName.includes('_getDateMonth')){
                const date = refName.replace('_getDateMonth ', '');
                option = new Date(await getStoredValue(date)!).toLocaleString('default', { month: 'numeric' });
            }
            else if(refName.includes('_getDateYear')){
                const date = refName.replace('_getDateYear ', '');
                option = new Date(await getStoredValue(date)!).getFullYear().toString();
            }
            else if(refName.includes('_getDateHour')){
                const date = refName.replace('_getDateHour ', '');
                option = new Date(await getStoredValue(date)!).getHours().toString();
            }
            else if(refName.includes('_getDateMinutes')){
                const date = refName.replace('_getDateMinutes ', '');
                option = new Date(await getStoredValue(date)!).getMinutes().toString();
            }
            else {
                option = await getStoredValue(refName);
            }
        }

        expect(
            await page.$eval<string, HTMLSelectElement>(
                selector,
                (ele: HTMLSelectElement) => ele.value
            )
        ).toEqual(option);
    }
);

When(
    'I click element {string} with text {string}',
    async function(
        this: ICustomWorld,
        element: string,
        text: string
    ){
        if (text.includes('_store')) {
            const refName = text.replace('_store ', ''); // Extract the reference name
            text = await getStoredValue(refName);
        }
        await this.page.locator(Sites[this.site][this.pagename][element]).filter({hasText: text}).first().scrollIntoViewIfNeeded()
        await this.page.locator(Sites[this.site][this.pagename][element]).filter({hasText: text}).first().click();
    }
);

Then(
    /^Input element "([^"]*)" (should|should not) have value "([^"]*)"$/,
    async function(
        this: ICustomWorld,
        element: string,
        action: string,
        value: string
    ){
        if (value.includes('_store')) {
            const refName = value.replace('_store ', ''); // Extract the reference name
            value = await getStoredValue(refName);
        }

        if(action == 'should'){
            await this.page.locator(Sites[this.site][this.pagename][element]).first().scrollIntoViewIfNeeded()
            await expect(this.page.locator(Sites[this.site][this.pagename][element]).first()).toHaveValue(value);
        } else {
            await this.page.locator(Sites[this.site][this.pagename][element]).first().scrollIntoViewIfNeeded()
            await expect(this.page.locator(Sites[this.site][this.pagename][element]).first()).not.toHaveValue(value);
        }
    }
);

Then(
    /^I click element "([^"]*)" in frame "([^"]*)"$/,
    async function (
        this: ICustomWorld,
        elementName: string,
        frameSelector: string
    ) {
        await page
            .frameLocator(Sites[this.site][this.pagename][frameSelector])
            .locator(Sites[this.site][this.pagename][elementName]).scrollIntoViewIfNeeded()
        const iframeButton = await page
            .frameLocator(Sites[this.site][this.pagename][frameSelector])
            .locator(Sites[this.site][this.pagename][elementName])
            .first();
        await iframeButton.click();
    }
);
