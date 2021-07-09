/*
 * Title:Environments
 * Description:Handel all environments related things
 * Author:MD.Atiqul HAque
 * Date: 03-07-2021
 *
 */

// dependency

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: '123456',
    maxChecks: 5,
    twilio: {
        fromPhone: '',
        accountSid: '',
        authToken: '',
    },
};

environments.production = {
    port: 4500,
    envName: 'production',
    secretKey: '123456',
    maxChecks: 5,
    twilio: {
        fromPhone: '',
        accountSid: '',
        authToken: '',
    },
};

// check current env

const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// module export

module.exports = environmentToExport;
