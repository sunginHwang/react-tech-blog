const defaultConfig = require('./local.conf');
const developmentConfig = require('./dev.conf');
const qaConfig = require('./qa.conf');

const getConfig = () => {
    const env = process.env.NODE_ENV
    console.log(env);
    if (env === 'qa') return qaConfig
    if (env === 'dev') return developmentConfig
    return defaultConfig
};

const config = getConfig();
module.exports = config;