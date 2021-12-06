import React from "react";
import './wheels.css'

class Wheels extends React.Component{
    render() {
        return(
            <div className="wheels">
                <div className="wheels-header"><p className="wheels_header">Wheels</p></div>
                <div className="wheels-options">
                    <div className="wheels-name">
                        <input type="checkbox"/>
                        <label className="19_wheels">19" Wheels</label>
                    </div>
                    <div className="wheels-name">
                        <input type="checkbox"/>
                        <label className="21_wheels">21" Wheels</label>
                    </div>
                </div>
            </div>
        )

    }
}
export default Wheels