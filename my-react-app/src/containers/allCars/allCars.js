import React from "react";
import CarList from "../../components/carList/carList";
import {connect} from "react-redux";
import {getAllCarsAsync} from "../../redux/actions/carActions";
import './allCars.css'
import {Link} from "react-router-dom";
import left_arrow from "../../assets/images/left-arrow.png";
import  {FcLeft}  from 'react-icons/all'
import styles1 from "../addCar/addCar.module.css";
const mapStateToProps = store =>({ getAllCars: store.allCars })
function mapDispatchToProps(dispatch) {
    return {
        getAllCarsAsync : getAllCarsAsync(dispatch),
    };
}


class AllCars extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAllCarsAsync()
    }
    render() {
        const {data} = this.props.getAllCars;
        return(
            <div className='all-flex-cars'>
                <div className='allCars'>
                <Link to='home'><FcLeft className='left-arrow'/></Link>
                <label >ALL CARS</label>
                </div>
                {/*<div className='allCarList'>*/}
                {data && data.map((car)=>{
                    return(
                            <CarList carId={car.id} brandId={car.Brand.brand} modelId={car.Model.model} carLicensePlate={car.carLicensePlate} year={car.year}/>
                    )}
                )}
                </div>
            //</div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllCars)