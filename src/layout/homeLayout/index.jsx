import React, { Component } from "react";
import routerRender from "@src/router/routerRender";
import "./index.less";

class HomeLayout extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const { routes } = this.props;
        return (
            <div className="home-layout">
                <div className="home-page-header">这里是 HomeLayout common header</div>
                {routerRender(routes)}
            </div>
        );
    }
}

export default HomeLayout;
