const path = require("path");
var ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CracoLessPlugin = require("craco-less");

module.exports = function ({ env }) {
    // webpack 相关配置
    let needAnalyze = process.argv.includes("--analyze");

    let webpackAlias = { "@src": path.resolve(__dirname, "src/") };
    let webpackPlugins = [new ProgressBarPlugin()];
    needAnalyze && webpackPlugins.push(new BundleAnalyzerPlugin());
    let webpack = {
        alias: webpackAlias,
        plugins: webpackPlugins,
        configure: (webpackConfig, { env, paths }) => {
            // console.log(webpackConfig);
            return webpackConfig;
        },
    };

    return {
        webpack,
        babel: {
            plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
            loaderOptions: (babelLoaderOptions, { env, paths }) => {
                // console.log(babelLoaderOptions);
                return babelLoaderOptions;
            },
        },
        plugins: [{ plugin: CracoLessPlugin }],
    };
};
