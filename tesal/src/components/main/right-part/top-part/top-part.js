import React from 'react'
import info_logo from '../../../../images/download (3).svg'
import './top-part.css'

class TopPart extends React.Component{
    render() {
        return(
            <div className="car-information">
            <div className="top-left-information-car">
                <label className="madel-name" >2016 Model S</label>
                <label className="car-information-1">100D Ludicrous Performance All</label>
                <label className="Wheel-drive" >Wheel Drive</label>
                <label className="mile-speed">51,837 mile odometer</label>
                <label className="seattle">Seattle, WA</label>
            </div>
        <div className="car-information-top-right">
            <label className="price-car" >$78,800</label>
            <label className="price-month">$1,109 /mo <img src={info_logo} /></label>
            <label className="transport-fee">Est. Transport Fee:</label>
        </div>
    </div>

        )
    }
}
export default TopPart