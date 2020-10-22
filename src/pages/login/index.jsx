import React, { Component } from "react";
import { Link } from "dva/router";
import Commonbox from "@components/commonBox";
import "./index.less";

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <div>这里是 Login 页面</div>
                <Commonbox>Commonbox 组件例子</Commonbox>
                <div>
                    <Link to="/home/index"> go to Home page</Link>
                </div>
            </div>
        );
    }
}

export default Login;
