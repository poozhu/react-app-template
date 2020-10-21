// import React from "react";
import { asynImport } from "@src/utils";
function dynamicRouter(importComponent) {
    return asynImport(importComponent, "loading");
}
const routes = [
    {
        path: "/",
        exact: true,
        component: dynamicRouter(() => import("../pages/login")),
    },
    {
        path: "/home",
        component: dynamicRouter(() => import("../layout/homeLayout")),
        routes: [
            {
                path: "/home/index",
                exact: true,
                component: dynamicRouter(() => import("../pages/home")),
            },
        ],
    },
];

export default routes;
