import React from "react";
import carImage from '../../assets/images/compositor (1).jpeg'
import carListStyle from './carList.module.css'



class CarList extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
         return(
            <div className={carListStyle.container}>
                <p className={carListStyle.header}>Car details</p>
                   <div className={carListStyle.carForm}>
                    <div><label>Brand </label><label>{this.props.brandId} </label></div>
                    <div><label>Model</label><label> {this.props.modelId}</label></div>
                    <div><label>Car License Plate</label><label> {this.props.carLicensePlate}</label></div>
                    <div><label>Year</label><label> {this.props.year}</label></div>
                </div>
                <img src={carImage}/>
            </div>

        )
    }
}
export default (CarList)