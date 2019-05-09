const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const compose = require('next-compose')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

module.exports = compose([
    [withBundleAnalyzer,{
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
            server: {
                analyzerMode: 'static',
                reportFilename: '../bundles/server.html'
            },
            browser: {
                analyzerMode: 'static',
                reportFilename: '../bundles/client.html'
            }
        }
    }],
    [withSass,{
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        },
    }],
    {
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
    }
])
