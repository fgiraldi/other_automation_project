// import { expect } from 'chai';
// import { Sites } from '../pageObjects';
// import { ElementActions } from './ElementHelper';
// import { isAlertPresent } from '../../config/wdio/lib/helpers/isAlertPresent';

// export class BrowserActions {
//     private Element: ElementActions;

//     constructor() {
//         this.Element = new ElementActions();
//     }
//     public refreshPage = () => browser.refresh();
//     public clearCookies = () => browser.deleteAllCookies();

//     public handleAlert = (action: 'accept' | 'dismiss') => {
//         if (action == 'accept') browser.acceptAlert();
//         else if (action == 'dismiss') browser.dismissAlert();
//     };

//     public pauseBrowser = (milliseconds: number) => browser.pause(milliseconds);

//     public executeCommand = (commandString: string) =>
//         browser.execute(commandString);

//     public setSize = (width: number, height: number) => {
//         browser.setWindowSize(width, height);
//     };

//     public getUrl = ({ destination }: { destination?: string }) => {
//         let browserUrl,
//             dest =
//                 !!destination && !!Sites[destination]
//                     ? Sites[destination].url &&
//                       (() =>
//                           (browser.options.baseUrl = Sites[destination].url))()
//                     : destination;
//         browser.url(dest);
//     };

//     public verifyUrl(
//         should: boolean,
//         method: 'include' | 'be',
//         urlText: string
//     ) {
//         const currentUrl = browser.getUrl();
//         const cUrlRegExp = RegExp(currentUrl);
//         console.log(currentUrl, urlText, currentUrl.includes(urlText));
//         should
//             ? method == 'include'
//                 ? expect(currentUrl).to.include(urlText)
//                 : expect(currentUrl).to.match(cUrlRegExp)
//             : method == 'include'
//             ? expect(currentUrl).not.to.include(urlText)
//             : expect(currentUrl).not.to.match(cUrlRegExp);
//     }

//     public openNewWindow = ({
//         destination,
//         isPrivate,
//     }: {
//         destination: string;
//         isPrivate: boolean;
//     }) => {
//         const dest =
//             !!destination && !!Sites[destination]
//                 ? Sites[destination].url
//                 : destination;

//         if (!isPrivate) {
//             const newWindow = browser.createWindow('window');
//             browser.switchToWindow(newWindow.handle);
//         } else if (isPrivate) {
//             const newWindow = browser.createWindow('window');
//             browser.switchToWindow(newWindow.handle);
//             // browser.execute(() => localStorage.clear());
//             // browser.execute(() => sessionStorage.clear());
//             // browser.clearSessionStorage();
//             // browser.clearLocalStorage();
//             browser.deleteAllCookies();
//             browser.refresh();
//         }
//         browser.maximizeWindow();
//         try {
//             browser.url(dest);
//         } catch (e) {
//             console.log(`Cannot navigate: ${e}`);
//         }
//     };

//     public getWindowSize = () => browser.getWindowSize();

//     public getCurrentUrl = () => browser.getUrl();

//     public closeCurrentBrowser = (target: any) => {
//         if (target === 'browser') {
//             try {
//                 browser.reloadSession();
//                 browser.maximizeWindow();
//             } catch (e) {
//                 console.log(`Close browser step failed due to: ${e}`);
//             }
//         } else if (target === 'window') {
//             browser.closeWindow();
//         } else {
//             target = target.replace(/\s|"/g, '');
//             this.closeWindowBy(target);
//         }
//         return target;
//     };

//     public swtichCurrentFrame(
//         toParent: any,
//         new_frame: any,
//         site: any,
//         page: any
//     ) {
//         if (toParent == ' parent ') {
//             browser.switchToParentFrame();
//         } else {
//             const iframeElem = this.Element.waitForElement(
//                 site,
//                 page,
//                 new_frame
//             );
//             const sel = ['class', 'id', 'name', 'title']
//                 .map((attrName) => {
//                     const attr = iframeElem.getAttribute(attrName);
//                     return attr ? `[${attrName}="${attr}"]` : '';
//                 })
//                 .join('');
//             browser.switchToFrame(browser.findElement('css selector', sel));
//         }
//     }

//     public checkWindowStatus = (
//         windowTitle: string,
//         status: string,
//         available = false
//     ) => {
//         const expectOpened = `${status === 'opened'}`;
//         let currentWindow, allWindows;
//         // Handle 'no such window' in case if the window is closed by extension
//         try {
//             currentWindow = browser.getWindowHandle();
//             allWindows = browser.getWindowHandles();
//             allWindows?.map((w) => {
//                 browser.switchToWindow(w);
//                 const wTitle = browser.getTitle();
//                 if (wTitle.includes(windowTitle)) {
//                     available = true;
//                 }
//             });
//         } catch (e) {
//             console.log(`Cannot get window handle: ${e}`);
//         }
//         expect(available, `${windowTitle} window should be ${status}`).to.be[
//             expectOpened
//         ];
//         if (!!currentWindow) browser.switchToWindow(currentWindow);
//     };

//     public checkTabTitle = async (tabTitle: string) => {
//         try {
//             let currentTitle = browser.getTitle();
//             expect(currentTitle).to.be.equal(tabTitle);
//         } catch (e) {
//             console.log(`Cannot get tab title: ${e}`);
//         }
//     };

//     public switchToWindow = ({ destination }: { destination: string }) => {
//         if (!!destination && !!Sites[destination]) {
//             browser.switchWindow(Sites[destination].url);
//         } else {
//             (async () => {
//                 try {
//                     return await browser.switchWindow(destination);
//                 } catch (e) {
//                     throw e;
//                 }
//             })();
//         }
//     };

//     public getBrowserName = () => browser.capabilities.browserName;

//     public waitFor = (
//         condition: () => boolean,
//         timeout?: number,
//         timeoutMsg?: string,
//         interval?: number
//     ) => browser.waitUntil(condition, timeout, timeoutMsg, interval);

//     public checkAmOnPage = ({
//         siteName,
//         pageName,
//     }: {
//         siteName: string;
//         pageName: string;
//     }) => {};

//     public sendKeys = ({ value }: { value: string }) => {
//         const keys = value.match(
//             /Shift(?![A-z])|Control(?![A-z])|End(?![A-z])|Alt(?![A-z])|ArrowDown(?![A-z])|Command(?![A-z])/gi
//         )
//             ? value.split(' ')
//             : [value];
//         browser.keys(keys);
//     };

//     public closeWindowBy = (window: string) => {
//         const currentWindow = browser.getWindowHandle();
//         browser.switchWindow(window);
//         const windowToClose = browser.getWindowHandle();
//         browser.closeWindow();
//         if (currentWindow != windowToClose)
//             browser.switchToWindow(currentWindow);
//     };

//     public maximizeWindow = () => browser.maximizeWindow();
// }
