import React from "react";
import './trim.css'

class Trim extends React.Component{
    render() {
        return(
            <div className="trim-part">
                <div className="trim-header"><p className="trimHeader">Trim</p></div>
                <div className="trim-options">
                    <div className="model-s-performance">
                        <input type="checkbox"/>
                        <div><label className="model-SPerformance">Model S Performance</label></div>
                    </div>
                    <div className="model-s-trim">
                        <input type="checkbox"/>
                        <div><label className="model-STrim">Model S </label></div>
                    </div>
                    <div className="model-P90DL">
                        <input type="checkbox"/>
                        <div><label className="model_P9ODL">P90DL All-Wheel Drive</label></div>
                    </div>
                    <div className="model-P90D">
                        <input type="checkbox"/>
                        <div><label className="model_P90D">P90D All-Wheel Drive</label></div>
                    </div>
                    <div className="model-75D">
                        <input type="checkbox"/>
                        <div><label className="model_75D">75D All-Wheel Drive</label></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Trim