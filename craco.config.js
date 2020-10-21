module.exports = function ({ env }) {
    return {
        webpack: {
            configure: (webpackConfig, { env, paths }) => {
                // console.log(webpackConfig);
                return webpackConfig;
            },
        },
        babel: {
            plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
            loaderOptions: (babelLoaderOptions, { env, paths }) => {
                // console.log(babelLoaderOptions);
                return babelLoaderOptions;
            },
        },
    };
};
