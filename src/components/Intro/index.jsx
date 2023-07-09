import React from "react";
import "./style.scss";
import cloud from "../../images/cloud.png";
import cloudsoft from "../../images/cloud-soft.png";
import Navbar from "./navbar";
import Home from "./intro-content";

const Intro = () => {
    return (
        <div className="intro-section">
            <div
                id="parallax"
                className="vector-bg"
            ></div>
            <img
                className="cloud"
                src={cloud}
                alt=""
            />
            <img
                className="cloud-soft"
                src={cloudsoft}
                alt=""
            />
            <div className="content">
                <Navbar />
                <Home/>
            </div>
        </div>
    );
};

export default Intro;
