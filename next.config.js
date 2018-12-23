const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    'process.env.NODE_ENV': process.env.NODE_ENV,
    webpack(config, options) {
        console.log(process.env.NODE_ENV);
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            })
        );
        console.log(config);
        return config
    },
});
