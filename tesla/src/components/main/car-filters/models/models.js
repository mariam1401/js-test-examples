import React from "react";
import './models.css'

class Model extends React.Component{
    render() {
        return(
            <div className="models">
                <div className="models-header"><p className="modelHeader">Models</p></div>
                <div className="global-model">
                    <div className="model">
                        <input type="radio"/>
                        <label className="model-s">Model S</label>
                    </div>
                    <div className="model">
                        <input type="radio"/>
                        <label className="model-3">Model 3</label>
                    </div>
                    <div className="model">
                        <input type="radio"/>
                        <label className="model-x">Model X</label>
                    </div>
                    <div className="model">
                        <input type="radio"/>
                        <label className="model-y">Model Y </label>
                    </div>
                </div>
            </div>
        )
    }
}
export default Model