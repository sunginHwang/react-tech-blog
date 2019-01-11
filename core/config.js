
import getConfig from 'next/config'
const { publicRuntimeConfig} = getConfig();

const env = publicRuntimeConfig.DEPLOY_ENV || 'development';

export const configs = {
    development: {
        api: 'https://api.development.com',
    },
    staging: {
        api: 'https://api.staging.com',
    },
    qa: {
        api: 'https://api.qa.com',
    },
    production: {
        api: 'https://api.production.com',
    },
}[env];
