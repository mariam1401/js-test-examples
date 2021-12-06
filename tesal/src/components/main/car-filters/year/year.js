import React from "react";
import './year.css'

class Year extends React.Component{
    render() {
        return(
            <div className="year_models">
                <div className="year-models-header"><p className="year_model-header">Model Year</p></div>
                <div className="year-options">
                    <div className="2021">
                        <input type="checkbox"/>
                        <label className="2021-year">2021</label>
                    </div>
                    <br/>
                    <div className="2020">
                        <input type="checkbox"/>
                        <label className="2020-year">2020</label>
                    </div>
                    <br/>
                    <div className="2019">
                        <input type="checkbox"/>
                        <label className="2019-year">2019</label>
                    </div>
                    <br/>
                    <div className="2018">
                        <input type="checkbox"/>
                        <label className="2018-year">2018</label>
                    </div>
                    <br/>
                    <div className="2017">
                        <input type="checkbox"/>
                        <label className="2017-year">2017</label>
                    </div>
                    <br/>
                    <div className="2016">
                        <input type="checkbox"/>
                        <label className="2016-year">2016</label>
                    </div>
                    <br/>
                    <div className="2015">
                        <input type="checkbox"/>
                        <label className="2015-year">2015</label>
                    </div>
                    <br/>
                    <div className="2014">
                        <input type="checkbox"/>
                        <label className="2014-year">2014</label>
                    </div>
                </div>
            </div>
        )
    }
}
export default Year