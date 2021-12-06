import React from "react";
import './inventory-type.css'

class Inventory extends React.Component{
    render() {
        return(
            <div className="inventory-type">
                <div className="inventory-header"><p className="inventoryHeader">Inventory Type</p></div>
                <div className="inventoryTypes">
                    <div className="new">
                        <input type="radio"/>
                        <label className="New">New</label>
                    </div>
                    <div className="new">
                        <input type="radio"/>
                        <label className="Used">Used</label>
                    </div>
                </div>
            </div>
        )
    }
}
export default Inventory