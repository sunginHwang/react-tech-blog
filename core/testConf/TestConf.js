
import getConfig from 'next/config'
const { publicRuntimeConfig} = getConfig();

const env = publicRuntimeConfig.DEPLOY_ENV || 'development';

const configs = {
    development: {
        api: 'https://api.development.com',
    },
    staging: {
        api: 'https://api.staging.com',
    },
    production: {
        api: 'https://api.production.com',
    },
}[env];

export default configs;