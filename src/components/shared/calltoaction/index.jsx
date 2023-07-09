import React from "react";
import "./style.scss";
import Arrow from "../arrow";



const CTA = ({ text, icon ,nav,download}) => {
    return (
        <div className={`call-to-action ${nav?"call-to-action-nav":""}`}>
            <span className="text">{text}</span>
            {download && <a href="/SUraj.pdf" download={true}></a>}
            {icon ? <div className="icon">{icon}</div> : <Arrow />}
        </div>
    );
};

export default CTA;
