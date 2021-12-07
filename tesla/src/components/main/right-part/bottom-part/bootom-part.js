import React from "react";
import './bottom-part.css'
import image4 from '../../../../images/download (4).svg'
import image5 from '../../../../images/download (6).svg'
import image6 from  '../../../../images/download (5).svg'

class BottomPart extends React.Component{
    render() {
        return(
            <div className="bottom-information-car">
                <div className="left-bottom-information">
                    <label className="1">Red Multi-Coat Paint</label>
                    <label className="2">19" Silver Slipstream</label>
                    <label className="3">Wheels</label>
                    <label className="4">Black Tesla Premium</label>
                    <label className="5">Seats</label>
                    <label className="6">Smart Air Suspension</label>
                    <label className="7">Sunroof</label>
                </div>
                <div className="bottom-right-information-car">
                    <div className="11">
                        <img src={image6}/>
                            <div>
                                <label className="8">Autopilot</label>
                            </div>
                    </div>
                    <div className="12">
                        <img src={image4}/>
                            <div>
                                <label className="9">Clean History></label>
                            </div>
                    </div>
                    <div className="13">
                        <img src={image5}/>
                            <div>
                                <label className="10">30-Day Premium</label>
                            </div>
                    </div>
                    <div>
                        <div>
                            <label className="11">Connectivity Trial</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BottomPart