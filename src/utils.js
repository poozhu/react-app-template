// import Loadable from "react-loadable";
import loadable from "@loadable/component";
import { extend } from "umi-request";

// 注册检查
// const modelNotExisted = (app, model) =>
//     !app._models.some(({ namespace }) => {
//         return namespace === model.substring(model.lastIndexOf("/") + 1);
//     });

// 动态引入组件
export function asynImport(loading = null, importComponent, storeArr, app) {
    // storeArr &&
    //     storeArr.forEach((model) => {
    //         if (modelNotExisted(app, model)) {
    //             app.model(require(`@src/store/${model}`).default);
    //         }
    //     });
    return loadable(importComponent, { fallback: loading });
}

// 具体配置可参考 https://github.com/umijs/umi-request
export const request = extend({
    // prefix: "/api/v1",
    // timeout: 1000,
    // headers: {
    //     "Content-Type": "multipart/form-data",
    // },
});
