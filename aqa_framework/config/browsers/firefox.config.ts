/**
 * Configurations for Firefox
 * @NOTE A list of available configurations can be found by opening Firefox browser and navigating to "about:config".
 * @NOTE Set the "Key: value" to customize firefox configurations.
 */

import { options } from '../commandLineArgs';
import { resolve } from 'path';

export const firefoxOptions = {
    binary: options['remote'] == 'true' ? options['firefoxBinary'] : undefined,
    args: [].concat(
        !!options['firefoxArgs'] ? options['firefoxArgs'].split(',') : []
    ),
};

const extensionPath = 'C:/grid/extension/firefox/ffx.xpi';
//options['firefoxExtensionPath'] ||
//resolve(__dirname, '../../extension/firefox/ffx.xpi');

export const firefoxProfile = {
    //extensions: [extensionPath],
    // extensiions: [
    //     'C:/Users/Jody McCormick/repos/proctoru-test-automation/extension/firefox/ffx.xpi',
    // ],
    'xpinstall.signatures.required': false,
    legacy: false,
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
    'dom.webnotifications.enabled': true,
    'permissions.default.camera': 1,
    'permissions.default.microphone': 1,
    /** */
    // 'extensions.getAddons.cache.enabled': false,
    // 'media.gmp-gmpopenh264.autoupdate': false,
};
