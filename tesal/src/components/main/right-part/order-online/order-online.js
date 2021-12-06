import React from "react";
import './order-online.css'
import info_logo from '../../../../images/download (3).svg'

class OrderOnline  extends React.Component{
    render() {
        return(
                <div className="Order-online">
                    <div className="info-icon-1">
                        <img src={info_logo}/>
                    </div>
                    <label className="order-online-information">Order online for touchless delivery.</label>
                    <a href="" className="learn_more">Learn more</a>
                </div>
        )
    }
}
export default OrderOnline