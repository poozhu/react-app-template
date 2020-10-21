import React from "react";
import { connect } from "dva";
import { Router } from "dva/router";
import routes from "./router/router";
import routerRender from "./router/routerRender";
import "./App.css";
@connect(({ example }) => ({
    example,
}))
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router history={this.props.history}>{routerRender(routes)}</Router>
            </div>
        );
    }
}

// 返给 Dva 的页面函数
export function RouterConfig({ history }) {
    return <App history={history} />;
}
