import React from "react";
import "./style.scss";
import Arrow from "../arrow";


const CTA = ({ text, icon ,nav,action}) => {
    return (
        <div onClick={action} className={`call-to-action ${nav?"call-to-action-nav":""}`}>
            <span className="text">{text}</span>
            
            {icon ? <div className="icon">{icon}</div> : <Arrow />}
        </div>
    );
};

export default CTA;
