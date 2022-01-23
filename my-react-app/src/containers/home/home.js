import React from "react";
import './home.css'
import tesla_logo from "../../assets/images/tesla.svg";
import down_arrow from "../../assets/images/down-arrow-svgrepo-com.svg";
import horizon_logo from "../../assets/images/download (1).svg";
import vertical_logo from "../../assets/images/download (2).svg";
import CarFilters from "./car-filters/carFilters";
import {Link} from "react-router-dom";
import Cars from "./cars/cars";

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
                <div className="header-items">
                     <div className="header1">
                         <a className="header-name1" href="https://www.tesla.com/"><img src={tesla_logo} className="tesla"/></a>
                    <ol className="nav-bar-center">
                        {['Model S','Model 3','Model X','Model Y','Solar Roof','Solar Panels'].map((color)=>{
                            return(
                                <li>{color}</li>
                            )})}
                    </ol>
                    <ol className="nav-bar-right">
                        {['Shop','Account','Menu'].map((color)=>{
                            return(
                                <li>{color}</li>
                            )})}
                    </ol>
                </div>
            </div>
            <div className="inventory-items">
                <div className="container-inventory">
                    <div className="inventory"><label className="inventory-name">Inventory</label></div>
                    <div className="right-items-part1">
                        <div className="price-list">
                            <select className="price">
                                {['Price : low to high','Price : high to low','Mileage : low to high','Mileage : low to high','Year : new to old'].map((color)=>{
                                    return(
                                        <option>{color}</option>
                                    )})}
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
            </div>
            <div className="addCar">
                <button className='addCar_button'><Link to='allCars'>All Cars</Link></button>
                <button className='addCar_button'><Link to='addCar'>Add Car</Link></button>
            </div>
              <div className="main-div">
                  <CarFilters />
                  <Cars/>
              </div>
    </div>
        )}
}
export default (Home)
