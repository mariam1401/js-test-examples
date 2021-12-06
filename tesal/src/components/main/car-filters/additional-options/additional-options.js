import React from "react";
import './additional-options.css'

class AdditionalOptions extends React.Component{
    render() {
        return(
            <div className="additional-options">
                <div className="additional-options-header"><p className="additional_options_header">Additional Options</p></div>
                <div className="additional-options-options">
                    <div className="premium-sound-system">
                        <input type="checkbox"/>
                        <div><label className="premium_sound_system">Premium Sound System</label></div>
                    </div>
                    <br/>
                    <div className="air-suspension">
                         <input type="checkbox"/>
                         <div><label className="air_suspension">Air Suspension</label></div>
                    </div>
                        <br/>
                    <div className="subzero-weather-package">
                         <input type="checkbox"/>
                         <div><label className="subzero_weather_package">Subzero Weather Package</label></div>
                    </div>
                    <br/>
                    <div className="HEPA-air-filtration-system">
                         <input type="checkbox"/>
                         <div><label className="HEPA-air-filtration-system">HEPA Air Filtration System</label></div>
                    </div>
                    <br/>
                    <div className="infotainment-upgrade">
                          <input type="checkbox"/>
                          <div><label className="infotainment_upgrade">Infotainment Upgrade</label></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdditionalOptions