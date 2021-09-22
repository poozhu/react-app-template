import React from "react";
import { asynImport } from "@src/utils";

// 动态路由加载以及 redux 注册
function dynamicRouter(importComponent, storeArr, app) {
    return asynImport(<div>Loading...</div>, importComponent, storeArr, app);
}

// 路由配置
const getRouterData = function (app) {
    function dynamicRouterWraper(importComponent, storeArr) {
        return dynamicRouter(importComponent, storeArr, app);
    }
    return [
        {
            path: "/",
            exact: true,
            component: dynamicRouterWraper(() => import("../pages/login")),
        },
        {
            path: "/home",
            component: dynamicRouterWraper(() => import("../layout/homeLayout")),
            routes: [
                {
                    path: "/home/index",
                    exact: true,
                    component: dynamicRouterWraper(() => import("../pages/home"), ["example"]),
                },
            ],
        },
    ];
};

export default getRouterData;
