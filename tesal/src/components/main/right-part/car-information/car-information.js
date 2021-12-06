import React from "react";
import  './car-information.css'

class CarInformation extends React.Component {
    render() {
        return (
            <div className="important-information">
                <div className="left-information">
                    <label className="mph">2.4s</label>
                    <label className="minutes/hour">0-60 mph</label>
                </div>
                <div className="line2"></div>
                <div className="center-information">
                    <label className="top-mph">155mph</label>
                    <label className="top-speed">Top Speed</label>
                </div>
                <div className="line2"></div>
                <div className="right-information">
                    <label className="mi">315mi</label>
                    <label className="range">range(EPA)</label>
                </div>
                <div className="buy-buttons">
                    <button className="button1">BUY NOW</button>
                    <button className="button2">VIEW DETAILS</button>
                </div>
            </div>
        )
    }
}
export default CarInformation