import React from "react";
import './vehicle.css'

class Vehicle extends React.Component{
    render() {
        return(
            <div className="vehicle-history">
                <div className="vehicle-history-header"><p className="vehicle_history_header">Vehicle History</p></div>
                <div className="vehicle-history-options">
                    <div className="clean-history">
                        <input type="checkbox"/>
                        <div className="cleanHistory">
                            <label className="clean_history">Clean History</label>
                        </div>
                    </div>
                    <br/>
                        <div className="previously-repaired">
                            <input type="checkbox"/>
                            <div className="previouslyRepaired">
                                <label className="previously_repaired">Previously Repaired</label>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default Vehicle