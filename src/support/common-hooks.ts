import { ICustomWorld } from './custom-world';
import { config } from './config';
// TODO: Workaround for https://github.com/cucumber/cucumber-js/issues/2353
// Revert when issue is solved
// import {
//     Before,
//     After,
//     BeforeAll,
//     Status,
//     setDefaultTimeout,
//     AfterStep,
// } from '@cucumber/cucumber';
const importCwd = require('import-cwd')
const {
    Before,
    After,
    BeforeAll,
    Status,
    setDefaultTimeout,
    BeforeStep,
    AfterStep,
 } = importCwd('@cucumber/cucumber')
import {
    chromium,
    ChromiumBrowser,
    firefox,
    FirefoxBrowser,
    webkit,
    WebKitBrowser,
    ConsoleMessage,
    request,
} from '@playwright/test';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types';
import { ensureDir } from 'fs-extra';
import UserProvider from '../../src/lib/UserProvider';

const tracesDir = 'traces';
const UP = new UserProvider();

async function _generateScreenshot(customWorld: ICustomWorld): Promise<void> {
    try {
        const image = await customWorld.page?.screenshot({
            fullPage: false,
        });
        image && customWorld.attach(image, 'image/png');
    }
    catch (e) {
        console.log(`Cannot generate page screenshot: ${e}`);
    }
}

setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);

BeforeAll(async function () {
    await ensureDir(tracesDir);
});

Before({ tags: '@ignore' }, async function () {
    return 'skipped' as any;
});

Before({ tags: '@debug' }, async function (this: ICustomWorld) {
    this.debug = true;
});

Before(async function (this: ICustomWorld, { gherkinDocument, pickle }: ITestCaseHookParameter) {
    this.startTime = new Date();
    this.testName = pickle.name.replace(/\W/g, '-');
    this.context = await chromium.launchPersistentContext(
        '',
        config.browserOptions
    );
    this.contextCollection = [];
    this.contextCollection.push(this.context);
    this.page = this.context.pages()[0];
    // Let's give it a second to load extension.
    // Without this, chances are first Archimedes navigation call will fail with ERR_ABORTED
    await this.page.waitForTimeout(1000);

    await this.context.tracing.start({ screenshots: true, snapshots: true });
    this.pickle = pickle;
    this.parentSuite(gherkinDocument.feature?.name);
});

BeforeStep(async function (this: ICustomWorld, { result, gherkinDocument, pickle }: ITestCaseHookParameter) {
    this.enableStepScreenshot();  // All steps generate a screenshot by default
});

AfterStep(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
    const resultRequiresScreenshot = result && result.status !== Status.PASSED;  // If step failed, force the screenshot
    const stepGeneratesScreenshot = this.isStepScreenshotEnabled();
    if (stepGeneratesScreenshot || resultRequiresScreenshot) {
        await _generateScreenshot(this);
    }
});

After(async function (this: ICustomWorld, { result, gherkinDocument, pickle }: ITestCaseHookParameter) {
    if (result) {
        if (result.status !== Status.PASSED) {
            // Replace : with _ because colons aren't allowed in Windows paths
            const timePart = this.startTime
                ?.toISOString()
                .split('.')[0]
                .replaceAll(':', '_');

            await this.context?.tracing.stop({
                path: `${tracesDir}/${this.testName}-${timePart}trace.zip`,
            });
        }

        await UP._init().then(
            async () =>
                await UP.freeAllUsersThisScenario(
                    gherkinDocument.feature?.name + ' : ' + pickle.name
                )
        );
    }
    this.contextCollection?.forEach(async function(context) {
        await context.close();
    });
});
