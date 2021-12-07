import React from "react";
import horizon_logo from '../../images/download (1).svg'
import vertical_logo from '../../images/download (2).svg'
import down_arrow from '../../images/down-arrow-svgrepo-com.svg'
import './inventory.css'

class Inventory_part extends React.Component{
    render() {
        return(
            <div className="container-inventory">
                <div className="inventory">
                    <label className="inventory-name">Inventory</label>
                </div>
                <div className="right-items-part">
                    <div className="price-list">
                        <select className="price">
                            <option className="low-to-high">Price : low to high</option>
                            <option className="high-to-low">Price : high to low</option>
                            <option className="low-to-high">Mileage : low to high</option>
                            <option className="high-to-low">Mileage : low to high</option>
                            <option className="new-to-old">Year : new to old</option>
                            <option className="old-to-new">Year : old to new</option>
                            <option className="nearest">Distance : nearest</option>
                        </select>
                        <img src={down_arrow} className="drop-down-arrow"/>
                    </div>
                    <div className="icons">
                        <button className=""> <img src={horizon_logo} className="horizon"/></button>
                        <div className="line1"> </div>
                        <button className=""> <img src={vertical_logo} className="vertical"/></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Inventory_part