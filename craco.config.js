const path = require("path");
const WebpackBar = require("webpackbar");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CracoLessPlugin = require("craco-less");

module.exports = function ({ env }) {
    // webpack 相关配置
    let needAnalyze = process.argv.includes("--analyze");

    let webpackAlias = {
        "@src": path.resolve(__dirname, "src/"),
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@store": path.resolve(__dirname, "src/store"),
    };
    let webpackPlugins = [new WebpackBar()];
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
