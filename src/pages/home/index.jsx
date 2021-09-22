import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { effects } from "@store/example";

import Commonbox from "@components/commonBox";

import "./index.less";
import logo from "@assets/logo.svg";

function Home() {
    const { a } = useSelector((state) => state.example);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(a);

        setTimeout(() => {
            dispatch(effects.getListData("请求参数"));
        }, 5000);
    }, [dispatch]);

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

export default Home;
