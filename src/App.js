import React from "react";

import { Router } from "react-router-dom";
import { createHashHistory } from "history";

import getRouterData from "./router/router";
import routerRender from "./router/routerRender";
import "./App.css";

const customHistory = createHashHistory();
class App extends React.Component {
    render() {
        let routes = getRouterData();
        return (
            <div className="App">
                <Router history={customHistory}>{routerRender(routes)}</Router>
            </div>
        );
    }
}

export default App;
