// import React from "react";
import HomeLayout from "../layout/homeLayout";
import Login from "../pages/login";
import Home from "../pages/home";

const routes = [
    {
        path: "/",
        exact: true,
        component: Login,
    },
    {
        path: "/home",
        component: HomeLayout,
        routes: [
            {
                path: "/home/index",
                exact: true,
                component: Home,
            },
        ],
    },
];

export default routes;
