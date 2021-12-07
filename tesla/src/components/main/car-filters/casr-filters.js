import React from "react";
import './car-filters.css'
import info_logo from '../../../images/download (3).svg'
import Model_part from './models/models'
import Inventory_part from "./Inventory-type/inventory-type";
import Trim_part from './trim/trim'
import ExteriorColor from "./exterior-color/exterior-color";
import InteriorColor from "./interior-color/interior-color";
import Wheels from "./wheels/wheels";
import Vehicle from "./vehicle/vehicle";
import Roof from "./roof/roof";
import Autopilot from "./autopilot/autopilot";
import AdditionalOptions from "./additional-options/additional-options";
import Year from "./year/year";



class CarFilters extends React.Component{
    render() {
        return(
 <div className="items-filter">
     <div className="zip-header-top">
        <div className="zip-header"><p className="sip_header">Delivery Zip Code</p></div>
        <div className="info-icon"><img src={info_logo}/></div>
     </div><br/>
     <div className="zip-code"><input type="search" placeholder="Enter Zip"/></div><br/>
     <div className="models-inventory-types">
     <div> <Model_part/> </div>
     <div> <Inventory_part/> </div>
     </div><br/><br/>
     <Trim_part/><br/>
     <ExteriorColor/><br/>
     <InteriorColor/><br/><br/>
     <Wheels/><br/>
     <Vehicle/><br/>
     <Roof/> <br/>
     <Autopilot/><br/>
     <AdditionalOptions/><br/>
     <Year/>
 </div>
        )
    }
}
export default CarFilters