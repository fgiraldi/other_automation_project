require('dotenv').config();

const environmentDisplaySetup = process.env.DISPLAY_SETUP || "SINGLE";
const shareScreenCaptureSource = environmentDisplaySetup == "SINGLE" ? "Entire screen" : "Screen 1"
const extensionPath = process.env.PLAYWRIGHT_EXT_LOCATION || "C:/grid/extension/dist"
        
const baseArgs = [
    '--start-maximized',
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
    `--auto-select-desktop-capture-source=${shareScreenCaptureSource}`,
]
const browserArgs = [
    ...baseArgs,
    `--disable-extensions-except=${extensionPath}`,
    `--load-extension=${extensionPath}`,
];
const guardianBrowserOptions = {
    executablePath: process.env.GUARDIAN_BROWSER,
    acceptDownloads: true,
    args: [
        ...baseArgs,
        "--use-file-for-fake-video-capture=config/moving_face.y4m",
        '--use-file-for-fake-audio-capture=config/silence.wav',
    ]
}
const baseBrowserOptions = {
    slowMo: 400,
    viewport: null,
    headless: false,
};
const browserOptions = {
    ...baseBrowserOptions,
    args: [
        ...browserArgs
    ],
    firefoxUserPrefs: {
        'media.navigator.streams.fake': true,
        'media.navigator.permission.disabled': true,
    },
};
const privateBrowserOptions = {
    ...baseBrowserOptions,
    args: [
        ...baseArgs
    ]
};
export const config = {
    browser: process.env.BROWSER || 'chromium',
    baseBrowserOptions,
    browserOptions,
    privateBrowserOptions,
    BASE_URL: process.env.BASE_URL || 'https://staging.proctoru.com/',
    IMG_THRESHOLD: { threshold: 0.4 },
    BASE_API_URL: process.env.BASE_API_URL || 'https://catfact.ninja/',
    guardianBrowserOptions: guardianBrowserOptions,

    lms: {
        canvas: process.env.CANVAS_URL || "https://proctoru.instructure.com/login/canvas",
        brightspace: process.env.BRIGHTSPACE_URL || "https://proctoru.brightspacedemo.com/d2l/login",
        moodle_latest: process.env.MOODLE_LATEST_URL || "https://staging-moodle-4-3-3.proctoru.com/login/index.php",
        moodle_previous: process.env.MOODLE_PREVIOUS_URL || "https://staging-moodle-4-3-0.proctoru.com/login/index.php",
        moodleRooms: process.env.MOODLEROOMS_LATEST_URL || "https://proctoru-sandbox.mrooms.net/",
        blackboard_latest: process.env.BLACKBOARD_LATEST_URL || "https://staging-bb-3900-84.proctoru.com/webapps/login/",
        pearson: process.env.PEARSON_URL || "https://spider.mathxl.com/logins4.htm"
    },

    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 0,
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://localhost:3000',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on',
        headless: false,
        // 'disable-extensions-except' :'C:/Development/extensions/staging_dec2022',

        launchOptions: {
            slowMo: 250,
        },
    },
};
