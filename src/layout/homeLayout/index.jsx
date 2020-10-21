import React, { Component } from "react";
// import { Route, Switch } from "dva/router";

class HomeLayout extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                HomeLayout
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default HomeLayout;
