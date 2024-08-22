// import { expect } from 'chai';
// import { elementActionParameters } from '../../types/interface';
// import { Sites } from '../pageObjects';
// import { Element } from '@wdio/sync';
// // @ts-ignore
// import { isAlertPresent } from '../../config/wdio/lib/helpers/isAlertPresent';

// export class ElementActions {
//     private parseShadowElementRef = (elementLocator) => {
//         return elementLocator
//             .split('|shadow|')
//             .map((a) => a.trim())
//             .reduce((elem, locator) => {
//                 return elem.shadow$(locator);
//             }, $('body'));
//     };
//     public waitForElement = (
//         siteName: string,
//         pageName: string,
//         elementName: string,
//         selector?: string,
//         indexInElemArray: number = 0
//     ): Element => {
//         const pageObject: string = Sites[siteName][pageName][elementName];
//         const isShadowElem: boolean =
//             !!pageObject && pageObject.includes('|shadow|');

//         /**
//          * @NOTE Parsing an array of element in a shadow DOM not currently configured.
//          *  - Will need to add that functionality if it becomes necessary
//          */
//         if (isShadowElem && indexInElemArray > 0) {
//             throw new Error(
//                 'Element Array functionality and Shadow Element parsing not currently configured.'
//             );
//         }

//         const element: Element =
//             pageObject && !selector
//                 ? isShadowElem
//                     ? this.parseShadowElementRef(pageObject)
//                     : indexInElemArray > 0
//                     ? $$(pageObject)[indexInElemArray]
//                     : $(pageObject)
//                 : indexInElemArray > 0
//                 ? $$(selector)[indexInElemArray]
//                 : $(selector);
//         browser.waitUntil(
//             () =>
//                 element.isExisting() &&
//                 (element.isEnabled() ||
//                     element.isClickable() ||
//                     element.isDisplayed()),
//             30 * 1000,
//             `[Failure] - Unable to locate element with name "${elementName}"${
//                 indexInElemArray > 0 ? 'at index ' + indexInElemArray : ''
//             } within the specified time limit.
//             - selector used: "${pageObject}"`
//         );
//         if (element.scrollIntoView) element.scrollIntoView({ block: 'center' });
//         return element;
//     };

//     public checkElementState = (site, page, elementName, method, attribute) =>
//         method.includes('should not') && attribute.includes('present')
//             ? expect(
//                   $$(Sites[site][page][elementName]).length > 0,
//                   `Expected element "${elementName}" not to be present.`
//               ).not.to.be.true /** @TODO Fix this... */
//             : (() => {
//                   const element = this.waitForElement(site, page, elementName);
//                   const elemAttrRead = {
//                       visible: () => element.isDisplayed(),
//                       hidden: () =>
//                           element.getAttribute('aria-hidden') == 'true' ||
//                           element.getAttribute('class').includes('hidden'),
//                       selected: () => element.isSelected(),
//                       checked: () => element.getAttribute('checked') == 'true',
//                       readonly: () =>
//                           element.getAttribute('readonly') == 'true',
//                       disabled: () => element.getAttribute('disabled') != null,
//                   }[attribute]();
//                   if (method == 'should') {
//                       expect(
//                           elemAttrRead,
//                           `Expected element "${elementName}" to be "${attribute}". Instead recieved "${elemAttrRead}"`
//                       ).to.be.true;
//                   } else if (method == 'should not') {
//                       expect(
//                           elemAttrRead,
//                           `Expected element "${elementName}" not to be "${attribute}". Instead recieved "${elemAttrRead}"`
//                       ).not.to.be.true;
//                   }
//               })();

//     public clickOnElement = (p: elementActionParameters) => {
//         const elem = this.waitForElement(
//             p.siteName,
//             p.pageName,
//             p.elementName,
//             p.selector
//         );
//         return elem.click();
//     };

//     public verifyElementCount = (p: elementActionParameters, count: string) => {
//         const value = Number(count);
//         this.waitForElement(p.siteName, p.pageName, p.elementName);
//         const elemCount = $$(
//             Sites[p.siteName][p.pageName][p.elementName]
//         ).length;
//         return expect(elemCount).to.be.eql(
//             value,
//             `Expected to find ${value} "${p.elementName}" element(s) on page, but only found ${elemCount}`
//         );
//     };

//     public clickElementWithOffset = (p: elementActionParameters) => {
//         const value = Number(p.offset.split(/: /)[1]);
//         const offset = p.offset.startsWith('y') ? { y: value } : { x: value };
//         const elem = this.waitForElement(
//             p.siteName,
//             p.pageName,
//             p.elementName,
//             p.selector
//         );
//         return elem.click(offset);
//     };

//     public clickOnSubelemInList = (p: elementActionParameters) => {
//         const elemArray = $$(Sites[p.siteName][p.pageName][p.elemArr]);
//         const elemArrayLen = elemArray.length;
//         let baseElem: Element;
//         for (let i = 0; i < elemArrayLen; i++) {
//             elemArray[i].scrollIntoView({ block: 'center' });
//             if (elemArray[i].getText().includes(p.text)) {
//                 baseElem = elemArray[i];
//                 break;
//             }
//             continue;
//         }
//         browser.waitUntil(
//             () => !!baseElem && baseElem.isExisting(),
//             20 * 1000,
//             `Could not locate base element with name "${
//                 p.elemArr
//             }". Selector used: "${Sites[p.siteName][p.pageName][p.elemArr]}"`
//         );
//         const subElem = baseElem.$(
//             Sites[p.siteName][p.pageName][p.elementName]
//         );
//         subElem.waitForEnabled(
//             10 * 1000,
//             undefined,
//             `Could not locate sub-element with name "${
//                 p.elementName
//             }". Selector used: "${
//                 Sites[p.siteName][p.pageName][p.elementName]
//             }"`
//         );
//         subElem.click();
//     };

//     public hoverOnElement = (p: elementActionParameters) => {
//         const elem = this.waitForElement(
//             p.siteName,
//             p.pageName,
//             p.elementName,
//             p.selector
//         );
//         elem.waitForEnabled(
//             3 * 1000,
//             false,
//             `[Failure] - Element "${
//                 p.elementName
//             }" is not enabled. Selector used: "${
//                 Sites[p.siteName][p.pageName][p.pageName]
//             }"`
//         );
//         elem.moveTo();
//     };

//     public clickAppointment = () => {
//         const appointmentButton = $(
//             '//a[contains(text(), "View appointment")]'
//         );
//         // Only exists if multiple appointments in list
//         const appointmentDropdownHeader = $(
//             '//div[@class="dropdown-menu"]//div[contains(text(),"Active Appointment")]'
//         );
//         const firstAppointment = $(
//             '//div[@class="dropdown-menu"]//a[contains(@href,"fulfillments/")]'
//         );
//         this.checkTextVisibility('should', 'Session Status');
//         if (appointmentButton.isExisting()) {
//             var firstAppointmentLink = appointmentButton.getAttribute('href');
//             browser.navigateTo(
//                 'https://staging.proctoru.com/' +
//                     firstAppointmentLink.toString()
//             );
//         }
//         if (appointmentDropdownHeader.isExisting()) {
//             var firstAppointmentLink = firstAppointment.getAttribute('href');
//             browser.navigateTo(
//                 'https://staging.proctoru.com/' +
//                     firstAppointmentLink.toString()
//             );
//         }
//     };

//     public clickAcknowledgeIncident = () => {
//         const AcknowledgeButton = $(
//             '//button[contains(text(), "Acknowledge")]'
//         );
//         if (AcknowledgeButton.isExisting()) {
//             AcknowledgeButton.click();
//         }
//     };

//     public disableFlipper = () => {
//         const disableForEveryone = $(
//             '//span[@title="Disable for everyone by clearing all percentages, groups and actors."]'
//         );
//         // Only exists if multiple appointments in list
//         if (disableForEveryone.isExisting()) {
//             disableForEveryone.click();
//             browser.waitUntil(() => {
//                 return !disableForEveryone.isDisplayed();
//             }, 10000);
//         }
//     };

//     public findSession = (test, institution, term) => {
//         const termDropdown = $(
//             '//div[@data-behavior="term"]//div[@class="choices"]'
//         );
//         const institutionDropdown = $('select[name="institution"]');
//         const testDisabled = $('select[id="exam"]:disabled'); //select:not([disabled])
//         const termDisabled = $('select[id="term"]:disabled');
//         const testDropdown = $(
//             '//div[@data-behavior="exam"]//div[@class="choices"]'
//         );
//         const textInput = $('//div[@aria-expanded="true"]//input'); //const testInput = $('//div[contains(@class, "is-active")]//input');
//         const findSessionButton = $(
//             'button[data-behavior="submit-exam-search"]'
//         );
//         browser.waitUntil(
//             () => {
//                 return institutionDropdown.isDisplayed();
//             },

//             60000,

//             'Institution Dropdown not found!'
//         );
//         institutionDropdown.click();
//         browser.keys([institution]);
//         browser.keys(['Enter']);
//         browser.waitUntil(
//             () => {
//                 return !termDisabled.isDisplayed();
//             },
//             60000,
//             'Term dropdown is still disabled!'
//         );
//         termDropdown.click();

//         browser.waitUntil(
//             () => {
//                 return textInput.isDisplayed();
//             },
//             60000,
//             'textInput not found!'
//         );
//         browser.pause(500);
//         textInput.setValue([term]);
//         browser.keys(['Enter']);
//         browser.waitUntil(
//             () => {
//                 return !testDisabled.isDisplayed();
//             },
//             60000,
//             'Test dropdown still disabled!'
//         );

//         browser.pause(3000);
//         testDropdown.click();
//         browser.pause(2000);
//         browser.keys([test]);
//         browser.keys(['Enter']);
//         findSessionButton.click();
//     };

//     public disableFlipperSingle = (action, target) => {
//         if (action == 'enable') {
//             const disableTargetFlipper = $(
//                 `//button[@title="Disable ${target}"]`
//             );
//             const addAnActorButton = $(
//                 '//button[contains(text(),"Add an actor")]'
//             );
//             const addActorConfirm = $('//input[@value="Add Actor"]');
//             const flipperIDField = $('//input[@placeholder="a flipper id"]');

//             if (!disableTargetFlipper.isExisting()) {
//                 addAnActorButton.click();
//                 flipperIDField.setValue(target);
//                 addActorConfirm.click();
//                 browser.waitUntil(() => {
//                     return disableTargetFlipper.isDisplayed();
//                 }, 10000);
//             }
//         } else if (action == 'disable') {
//             const disableTargetFlipper = $(
//                 `//button[@title="Disable ${target}"]`
//             );
//             if (disableTargetFlipper.isExisting()) {
//                 disableTargetFlipper.click();
//                 browser.waitUntil(() => {
//                     return !disableTargetFlipper.isDisplayed();
//                 }, 10000);
//             }
//         }
//     };

//     public clickElementWithSelectorIfVisible = (selector) => {
//         selector = $(`${selector}`);

//         if (selector.isExisting()) {
//             selector.click();
//         } else {
//             // console.log('I didn't find it!')
//         }
//     };

//     public resetAccessCode = (accessCode) => {
//         const accessCodeSearchBox = $('#search_code');
//         const searchButton = $('//input[@value="Search"]');
//         const reactivateCodeButton = $("//button[@name='reactivate-button']");
//         accessCodeSearchBox.setValue(accessCode);
//         browser.pause(1000);
//         searchButton.click();
//         browser.pause(3000);
//         if (reactivateCodeButton.isExisting()) {
//             reactivateCodeButton.click();
//             browser.pause(5000);
//         }
//     };

//     public acceptTOSifVisible = () => {
//         // Only exists if TOS shows. Very broad selector on purpose
//         const termsOfServiceAccept = $('//*[@value="Accept Terms"]');
//         const termsOfServiceCheckbox = $(
//             '//div[@class="form-check"]//input[@id="user_terms"]'
//         );
//         if (termsOfServiceAccept.isExisting()) {
//             termsOfServiceCheckbox.click();
//             termsOfServiceAccept.click();
//             browser.pause(5000);
//         }
//     };

//     public acceptEUifAvailable = () => {
//         const euCitizenRadio = $('#user_eu_citizen_confirmed_no');
//         const euCitizenSubmit = $('//input[@value="Submit"]');
//         if (euCitizenRadio.isExisting()) {
//             euCitizenRadio.click();
//             euCitizenSubmit.click();
//             browser.pause(5000);
//         }
//     };

//     public signInArch = () => {
//         const signInButton = $('//input[@value="Log in"]');
//         signInButton.click();
//         browser.pause(3000);
//     };

//     public startBlackboardExam = () => {
//         // Only exists if previous attempt exists
//         const startNewSubmissionButton = $(
//             '//a[@id="retakeAssessmentButtonId"]'
//         );
//         // Only exists if previous attempt doesn't exist
//         const beginExamButton = $('//input[@value="Begin"]');
//         const continueExamButton = $('//input[@value="Continue"]');
//         if (continueExamButton.isExisting()) {
//             continueExamButton.click();
//         }
//         if (startNewSubmissionButton.isExisting()) {
//             startNewSubmissionButton.click();
//         }
//         if (beginExamButton.isExisting()) {
//             beginExamButton.click();
//             if (startNewSubmissionButton.isExisting()) {
//                 startNewSubmissionButton.click();
//             }
//         }
//     };

//     public checkAllElementsText = (text, elementToCheck) => {
//         var elementsFound = $$(elementToCheck);
//         for (var i = 0; i < elementsFound.length; i++) {
//             // console.log(elementsFound[i].getText());
//             try {
//                 // console.log(
//                 //     'ELEMENT TEXT I TRIED: ' + elementsFound[i].getText()
//                 // );
//                 // console.log('TEXT GIVEN: ' + text);

//                 elementsFound[i].getText() == text;
//             } catch {
//                 throw console.error('Element Text did not equal ' + text);
//             }
//         }
//     };

//     public clickUpdateStartTime = () => {
//         const updateStartTimeButton = $(
//             '//*[contains(text(), "Update Start Time to Now")]'
//         );
//         if (updateStartTimeButton.isExisting()) {
//             updateStartTimeButton.click();
//         } else {
//             // console.log("no button found")
//         }
//     };

//     public remindMeLaterPearson = () => {
//         const remindMeLaterButton = $(
//             '//*[contains(text(), "Remind me later")]'
//         );
//         if (remindMeLaterButton.isExisting()) {
//             remindMeLaterButton.click();
//         }
//     };

//     public toggleProctorlessPassword = (status) => {
//         const proctorlessPasswordCheckboxChecked = $(
//             "//input[@id='setting_enable_proctorless_password_injection_configuration' and @checked='checked']"
//         );
//         const proctorlessPasswordCheckbox = $(
//             "//input[@id='setting_enable_proctorless_password_injection_configuration']"
//         );
//         const updateSettingButton = $('//input[@value="Update Settings"]');
//         const settingsUrl = 'https://staging.proctoru.com/settings/edit';
//         browser.navigateTo(settingsUrl);
//         if (proctorlessPasswordCheckboxChecked.isExisting()) {
//             //console.log("It's checked");
//             if (status == 'enable') {
//                 console.log('proctorlessPassword already enabled. Ignoring..');
//             } else if (status == 'disable') {
//                 proctorlessPasswordCheckbox.click();
//                 updateSettingButton.click();
//                 browser.pause(5000);
//             }
//         } else {
//             if (status == 'enable') {
//                 proctorlessPasswordCheckbox.click();
//                 updateSettingButton.click();
//                 browser.pause(5000);
//             } else if (status == 'disable') {
//                 console.log('proctorlessPassword already disabled.');
//             }
//         }
//     };

//     public logOutArchimedes = () => {
//         browser.navigateTo('https://staging.proctoru.com/session/destroy');
//         browser.pause(1000);
//         browser.navigateTo('https://staging.proctoru.com/session/new');
//     };

//     public traverseSessionTable = (searchQuery: any, sessionStatus: string) => {
//         const tableElements = $$(
//             '//table//td//a[contains(@href, "proctoru.com/reservations")]'
//         );
//         const cancelAppointment = $(
//             '//a[@class="btn btn-danger btn-block"][@data-target="#cancel-modal"]'
//         );

//         const submitCancel = $('input[type="submit"][value="Submit"]');
//         //searchQuery.replace(/ /g, '+');
//         //sessionStatus.toLowerCase();
//         if (tableElements != undefined || tableElements.length > 0) {
//             for (var i = 0; i < tableElements.length; i++) {
//                 tableElements[i].click();
//                 browser.pause(3000);
//                 this.clickAppointment();
//                 browser.pause(2000);
//                 cancelAppointment.click();
//                 browser.pause(1000);
//                 submitCancel.click();
//                 browser.pause(4000);
//                 browser.navigateTo(
//                     'https://staging.proctoru.com/reservations?utf8=%E2%9C%93&search=' +
//                         searchQuery +
//                         '&exam=&status=' +
//                         sessionStatus.toLowerCase() +
//                         '&order=&commit=Search'
//                 );
//             }
//         }
//         this.logOutArchimedes();
//     };

//     public traverseFlightpath = (steps) => {
//         //const flightPathElements = $$("//li[contains(@class,'nav-item mb-1')]");
//         const uncompletedflightpath = $$(
//             "//ul[contains(@class,'nav-flightpath')]//li[not(contains(@class,'completed'))]"
//         );
//         if (uncompletedflightpath != undefined) {
//             for (var i = 0; i <= steps - 1; i++) {
//                 const checkboxElement = $(
//                     "//div[contains(@class, 'tab-incomplete active')]//input[@type='checkbox']"
//                 );
//                 checkboxElement.click();
//                 const alert = isAlertPresent();
//                 if (alert) {
//                     browser.acceptAlert();
//                     browser.pause(3000);
//                 }
//                 const uncompletedFlightPathStep = $(
//                     "//div[contains(@class, 'incomplete active')]//strong[contains(text(),'Complete step')]"
//                 );
//                 browser.waitUntil(() => {
//                     return uncompletedFlightPathStep.isDisplayed();
//                 }, 20000);
//             }
//         }
//     };

//     public setInputElementValue = (p: elementActionParameters) => {
//         const elem = this.waitForElement(p.siteName, p.pageName, p.elementName);
//         try {
//             elem.setValue(p.text);
//         } catch {
//             elem.click();
//             browser.keys([p.text]);
//         } finally {
//             // const displayedText = elem.getValue() || elem.getText();
//             // expect(
//             //     displayedText === p.text,
//             //     `[Failure] - Expected element ${p.elementName} to have the value "${p.text}". Instead saw "${displayedText}"`
//             // ).to.be.true;
//         }
//     };

//     public setInputWithoutValidation = (p: elementActionParameters) => {
//         const elem = this.waitForElement(p.siteName, p.pageName, p.elementName);
//         try {
//             elem.setValue(p.text);
//         } catch {
//             elem.click();
//             browser.keys([p.text]);
//         }
//     };

//     public getElementAttribute = (p: elementActionParameters) => {
//         const elem = this.waitForElement(p.siteName, p.pageName, p.elementName);
//         return elem.getAttribute(p.attribute);
//     };

//     public checkElementAttribute = (p: elementActionParameters) => {
//         const attrVal = this.getElementAttribute(p);
//         if (p.method == 'should be') expect(attrVal).to.equal(p.value);
//         if (p.method == 'should include') expect(attrVal).to.include(p.value);
//         if (p.method == 'should not be') expect(attrVal).not.to.equal(p.value);
//         if (p.method == 'should not include')
//             expect(attrVal).not.to.include(p.value);
//     };

//     public addValueToInputElement = (p: elementActionParameters) => {
//         const elem = this.waitForElement(p.siteName, p.pageName, p.elementName);
//         elem.addValue(p.text);
//         const displayedText = elem.getText() || elem.getValue();
//         expect(
//             displayedText.includes(p.text),
//             `[Failure] - Expected element ${p.elementName} to include the value "${p.text}". Instead saw "${displayedText}"`
//         ).to.be.true;
//     };

//     public selectOption = async (p: elementActionParameters) => {
//         const elem = this.waitForElement(p.siteName, p.pageName, p.elementName);
//         elem.selectByVisibleText(p.optionText);
//         const selectedOption = elem.$('option:checked').getText();
//         expect(
//             selectedOption === p.optionText,
//             `[Failure] - Expected option "${p.optionText}" to be selected. Instead saw ${selectedOption}`
//         ).to.be.true;
//     };

//     public setCheckbox = ({
//         action,
//         p,
//     }: {
//         action: boolean;
//         p: elementActionParameters;
//     }) => {
//         const element = this.waitForElement(
//             p.siteName,
//             p.pageName,
//             p.elementName
//         );
//         if (action !== element.isSelected()) element.click();
//     };

//     public checkElementVisibility = (p: elementActionParameters) => {
//         if (p.method == 'should' || p.method == 'should not') {
//             const element: Element =
//                 Sites[p.siteName][p.pageName][p.elementName] && !p.selector
//                     ? Sites[p.siteName][p.pageName][p.elementName].includes(
//                           '|shadow|'
//                       )
//                         ? this.parseShadowElementRef(
//                               Sites[p.siteName][p.pageName][p.elementName]
//                           )
//                         : $(Sites[p.siteName][p.pageName][p.elementName])
//                     : $(p.selector);
//             element.waitForDisplayed(
//                 60 * 1000,
//                 p.method == 'should not',
//                 `[Failure] - Expected element: "${p.elementName}" to${
//                     p.method == 'should' ? ' ' : ' not '
//                 }be displayed.`
//             );
//         } else {
//             throw `Method "${p.method}" not recogized.`;
//         }
//     };

//     public checkTextVisibility = (method, text) => {
//         const element = $(`//*[contains(., "${text}")]`);
//         element.waitForDisplayed(
//             10 * 1000,
//             method == 'should not',
//             `[Failure] - Expected text: "${text}" to${
//                 method == 'should' ? ' ' : ' not '
//             }be displayed.`
//         );
//     };

//     public getElementLocation = async (p: elementActionParameters) => {
//         const elem = await this.waitForElement(
//             p.siteName,
//             p.pageName,
//             p.elementName
//         );
//         const loc = await elem.getLocation();
//         return loc;
//     };

//     public compareElementLocations = async (elem1, elem2, compareMethod) => {
//         const elem1Location = await this.getElementLocation(elem1);
//         const elem2Location = await this.getElementLocation(elem2);
//         if (compareMethod == 'above')
//             return expect(elem1Location.y).to.be.lessThan(elem2Location.y);
//         if (compareMethod == 'below')
//             return expect(elem1Location.y).to.be.greaterThan(elem2Location.y);
//         if (compareMethod == 'to the left of')
//             return expect(elem1Location.x).to.be.lessThan(elem2Location.x);
//         if (compareMethod == 'to the right of')
//             return expect(elem1Location.x).to.be.greaterThan(elem2Location.x);
//     };

//     public makeAPICall = async () => {
//         fetch(
//             'https://staging-bb-3900-60.proctoru.com/webapps/gradebook/do/instructor/clearAttempt?course_id=_4_1&courseMembershipId=-1',
//             {
//                 headers: {
//                     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//                     'accept-language': 'en-US,en;q=0.9',
//                     'cache-control': 'max-age=0',
//                     'content-type': 'application/x-www-form-urlencoded',
//                     'sec-ch-ua':
//                         '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
//                     'sec-ch-ua-mobile': '?0',
//                     'sec-ch-ua-platform': '"macOS"',
//                     'sec-fetch-dest': 'document',
//                     'sec-fetch-mode': 'navigate',
//                     'sec-fetch-site': 'same-origin',
//                     'sec-fetch-user': '?1',
//                     'upgrade-insecure-requests': '1',
//                 },
//                 referrer:
//                     'https://staging-bb-3900-60.proctoru.com/webapps/gradebook/do/instructor/enterGradeCenter?course_id=_4_1&cvid=fullGC',
//                 referrerPolicy: 'strict-origin-when-cross-origin',
//                 body: 'clearOption=ALLATTEMPTS&outcomeDefinitionId=16&attemptId=&nullAttempt=&startDate=undefined&endDate=undefined&blackboard.platform.security.NonceUtil.nonce=f36a666b-c8b1-4b5e-a573-be6f689d430d',
//                 method: 'POST',
//                 mode: 'cors',
//                 credentials: 'include',
//             }
//         );
//     };
//     public checkElementText = (
//         p: elementActionParameters,
//         index: number = 0
//     ) => {
//         const elem = this.waitForElement(
//             p.siteName,
//             p.pageName,
//             p.elementName,
//             undefined,
//             index
//         );
//         const elemText = elem.getText();
//         const elemValue = elem.getValue();
//         const mthd = !!p.method
//             ? p.method == 'be'
//                 ? 'eql'
//                 : 'contain'
//             : 'contain';
//         if (!!p.text) {
//             const expectation =
//                 p.condition == 'should'
//                     ? expect(elemText || elemValue).to
//                     : expect(elemText || elemValue).to.not;
//             return expectation[mthd](
//                 p.text,
//                 `[Failure] - Expected element ${p.elementName} to${
//                     p.condition == 'should' ? '' : ' not'
//                 } ${mthd} "${p.text}". Instead saw "${elemText || elemValue}".`
//             );
//         } else {
//             return elemText || elemValue;
//         }
//     };

//     public checkEveryElementText = (p: elementActionParameters) => {
//         const elementArray = $$(Sites[p.siteName][p.pageName][p.elementName]);
//         const elementArrayText = elementArray.map((e) => e.getText());
//         expect(
//             elementArrayText.length > 0 &&
//                 elementArrayText.every((eText, i) => {
//                     elementArray[i].scrollIntoView({ block: 'center' });
//                     return eText == p.text;
//                 }),
//             `Expected every element "${p.elementName}" to have the value "${p.text}". Instead saw: "${elementArrayText}"`
//         ).to.be.true;
//     };
// }
