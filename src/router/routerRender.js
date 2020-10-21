import React from "react";
import { Switch, Route } from "dva/router";

// 路由渲染函数
export default function routerRender(routes) {
    return (
        <Switch>
            {routes.map((item) => {
                const { component: Component, routes, path } = item;
                return !routes ? (
                    <Route {...item} key={path} />
                ) : (
                    <Route path={path} render={() => <Component routes={routes} key={path} />}></Route>
                );
            })}
        </Switch>
    );
}
