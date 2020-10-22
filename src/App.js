import React from "react";
import { Router } from "dva/router";
import getRouterData from "./router/router";
import routerRender from "./router/routerRender";
import "./App.css";

class App extends React.Component {
    render() {
        const { app, history } = this.props;
        let routes = getRouterData(app);
        return (
            <div className="App">
                <Router history={history}>{routerRender(routes)}</Router>
            </div>
        );
    }
}

// 返给 Dva 的页面函数
export function RouterConfig({ history, app }) {
    return <App history={history} app={app} />;
}
