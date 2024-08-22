import { config, SecretsManager } from 'aws-sdk';
import { GetSecretValueRequest } from 'aws-sdk/clients/secretsmanager';
config.region = 'us-east-1';

/**
 * Uses AWS credentials to retrieve the data stored in AWS Secrets Manager
 * @param key (Optional) The key of a key: value pair in the stored secret
 * @returns A Promise that resolves to a JSON object containing the value of the key if one is supplied or the entire data set if no key is provided
 */
export const getSecretsStoreValues = async (key?: string) => {
    const secrets = new SecretsManager(config);
    const valueRequest: GetSecretValueRequest = {
        SecretId:
            'arn:aws:secretsmanager:us-east-1:373442825633:secret:staging/test-automation/env-WGOSjN',
    };
    return secrets
        .getSecretValue(valueRequest)
        .promise()
        .then(res => {
            const data = JSON.parse(res.SecretString);
            if (!!key) {
                if (Object.keys(data).includes(key)) {
                    let r = {};
                    r[key] = data[key];
                    return r;
                } else {
                    throw new Error(`Key "${key}" not found in secrets store!`);
                }
            }
            return data;
        });
};
