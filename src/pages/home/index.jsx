import React, { Component } from "react";
import { Link } from "dva/router";
import { connect } from "dva";

import Commonbox from "@components/commonBox";

import "./index.less";
import logo from "@assets/logo.svg";
@connect(({ example }) => ({
    example,
}))
class Home extends Component {
    componentDidMount() {
        console.log(this.props);

        setTimeout(() => {
            this.props.dispatch({
                type: "example/getListData",
                payload: "请求参数",
            });
        }, 5000);
    }
    render() {
        const { a } = this.props.example;
        return (
            <div className="home-page">
                <div>这是 home Page</div>
                <img src={logo} alt="" style={{ width: 100 }} />
                <div>
                    <Link to="/"> go to login</Link>
                </div>
                <Commonbox>{a}</Commonbox>
                <Commonbox>456</Commonbox>
            </div>
        );
    }
}

export default Home;
