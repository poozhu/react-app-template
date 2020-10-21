import React from "react";
import { connect } from "dva";
import { Router, Route, Switch } from "dva/router";
import routes from "./router/router";
import logo from "./assets/logo.svg";
import "./App.css";
@connect(({ example }) => ({
    example,
}))
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>{this.props.example.a}</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
                <Router history={this.props.history}>
                    <Switch>{RouterRender(routes)}</Switch>
                </Router>
            </div>
        );
    }
}

// 路由渲染函数
function RouterRender(routes) {
    return routes.map((item) => {
        return !item.routes ? <Route {...item} /> : <Route {...item}>{RouterRender(item.routes)}</Route>;
    });
}

// 返给 Dva 的页面函数
export function RouterConfig({ history }) {
    return <App history={history} />;
}
