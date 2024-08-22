/**
 * Configurations for Chrome
 * @NOTE A list of available command line switches can be found at https://peter.sh/experiments/chromium-command-line-switches/
 */

import { options } from '../commandLineArgs';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const fakeVideoPath =
    options['fakeVideoPath'] != undefined
        ? options['fakeVideoPath']
        : options['remote'] == 'true'
        ? 'C:/grid/files/moving_face.y4m'
        : resolve(__dirname, '../../src/fixtures/files/moving_face.y4m');

const fakeAudioPath =
    options['fakeAudioPath'] != undefined
        ? options['fakeAudioPath']
        : options['remote'] == 'true'
        ? 'C:/grid/files/silence.wav'
        : resolve(__dirname, '../../src/fixtures/files/silence.wav');

const extensionPath =
    options['extensionPath'] != undefined
        ? options['extensionPath']
        : options['remote'] === 'true'
        ? 'C:/grid/extension/dist'
        : resolve(__dirname, '../../extension/chrome/dist.zip');

const additionalExtensionPath = resolve(
    __dirname,
    '../../extension/chrome/extension_example.crx'
);

const testScreenShare =
    options['testScreenShare'] != undefined
        ? options['testScreenShare']
        : options['remote'] === 'true'
        ? 'Entire screen'
        : 'Screen 1';

export const chromeOptions = {
    extensions: [
        readFileSync(additionalExtensionPath).toString('base64'),
    ].concat(
        options['remote'] !== 'true'
            ? [readFileSync(extensionPath).toString('base64')]
            : []
    ),
    args: [
        'start-maximized',
        'no-sandbox',
        'site-per-process',
        'disable-setuid-sandbox',
        'disable-dev-shm-usage',
        'allow-legacy-extension-manifests',
    ]
        .concat(
            options['removeCamMicPerms'] !== 'true'
                ? [
                      'use-fake-device-for-media-stream',
                      'use-fake-ui-for-media-stream',
                      'use-file-for-fake-video-capture=' + fakeVideoPath,
                      'use-file-for-fake-audio-capture=' + fakeAudioPath,
                      'auto-select-desktop-capture-source=' + testScreenShare,
                  ]
                : []
        )
        .concat(!!options['chromeArgs'] ? options['chromeArgs'].split(',') : [])
        .concat(
            options['remote'] == 'true'
                ? ['load-extension=' + extensionPath]
                : []
        ),
    prefs:
        options['remote'] == 'true'
            ? undefined
            : {
                  directory_upgrade: true,
                  prompt_for_download: false,
                  'download.default_directory': options['chromeDownloadDir'],
              },
};
