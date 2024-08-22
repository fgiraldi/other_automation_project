// TODO: Workaround for https://github.com/cucumber/cucumber-js/issues/2353
// Revert when issue is solved
// import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { IWorldOptions } from '@cucumber/cucumber';
const importCwd = require('import-cwd')
const { setWorldConstructor } = importCwd('@cucumber/cucumber')

import { CucumberAllureWorld } from "allure-cucumberjs";

import * as messages from '@cucumber/messages';
import {
    BrowserContext,
    Page,
    APIRequestContext,
} from '@playwright/test';

export interface CucumberWorldConstructorParams {
    parameters: { [key: string]: string };
}

export interface ICustomWorld extends CucumberAllureWorld {
    debug: boolean;
    pickle?: messages.Pickle;
    context?: BrowserContext;
    contextCollection?: BrowserContext[];
    page?: Page;
    pagename?: string;
    site?: string;
    testName?: string;
    startTime?: Date;
    server?: APIRequestContext;
    disableStepScreenshot(): void;
    enableStepScreenshot(): void;
    isStepScreenshotEnabled(): boolean;
}

export interface test_user {
    name?: string;
    email?: string;
    password?: string;
    env?: ('staging' | 'asdf')[];
    id?: string;
}

export class CustomWorld extends CucumberAllureWorld implements ICustomWorld {
    protected stepGeneratesScreenshot: boolean;
    constructor(options: IWorldOptions) {
        super(options);
        this.stepGeneratesScreenshot = true;
    }
    debug = false;

    disableStepScreenshot() {
        this.stepGeneratesScreenshot = false;
    }

    enableStepScreenshot() {
        this.stepGeneratesScreenshot = true;
    }

    isStepScreenshotEnabled(): boolean {
        return this.stepGeneratesScreenshot;
    }
}

setWorldConstructor(CustomWorld);
