import React from "react";
import './autopilot.css'


class Autopilot extends React.Component{
    render() {
        return(
            <div className="autopilot">
                <div className="autopilot-header"><p className="autopilot_header">Autopilot</p></div>
                <div className="autopilot-options">
                    <div className="original-autopilot">
                        <input type="checkbox"/>
                        <label className="original_autopilot">Original Autopilot</label>
                    </div>
                    <div className="Autopilot">
                        <input type="checkbox"/>
                        <div><label className="autopilot-auto">Autopilot</label></div>
                    </div>
                    <div className="full-self-driving">
                        <input type="checkbox"/>
                        <div><label className="full_self_driving">Full Self Driving</label></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Autopilot