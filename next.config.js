const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack(config, options) {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.PROCESS': JSON.stringify(process.env.NODE_ENV),
                'process.env.DEPLOY_ENV': JSON.stringify(process.env.DEPLOY_ENV)
            })
        );
        return config
    },
    publicRuntimeConfig: {
        'DEPLOY_ENV': process.env.DEPLOY_ENV
    }
});
