import React from "react";
import './roof.css'

class Roof extends React.Component{
    render() {
        return(
            <div className="roof">
                <div className="roof-header"><p className="roof_header">Roof</p></div>
                <div className="roof-options">
                    <div className="body-colored-roof">
                        <input type="checkbox"/>
                        <div className="bodyColoredRoof"><label className="body_colored_roof">Body Colored Roof</label></div>
                    </div>
                    <br/>
                    <div className="glass-roof">
                        <input type="checkbox"/>
                        <div className="glassRoof"><label className="glass_roof">Glass Roof</label></div>
                    </div>
                    <br/>
                    <div className="sunroof">
                        <input type="checkbox"/>
                        <div className="sunRoof"><label className="Sunroof">Sunroof</label></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Roof