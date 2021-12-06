import React from "react";
import './arrow.css'

const Arrow = ({ direction, clickFunction,arrow,src}) => (
    <div
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }>
        {/*{arrow}*/}
        <img  src={src} alt="Logo" />

    </div>
);
export default Arrow