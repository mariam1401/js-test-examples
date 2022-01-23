import React from "react";
import './cars.css'
import {connect} from "react-redux";
import {getUserCarsAsync} from "../../../redux/actions/carActions";
import CarList from "../../../components/carList/carList";
import {REQUEST_STATUSES} from "../../../utils/constants";
import LoadingSpinner from "./component/loadingSpiner";
import {CarComponent} from "../car-filters/component/carComponent";
class Cars extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUserCarsAsync(this.props.filter)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        debugger;
        const data = this.props.userCars?.data;
        const {filter} = this.props;
        const newData = nextProps.userCars?.data;
        const newFilter = nextProps.filter;
        if(JSON.stringify(filter) !== JSON.stringify(newFilter)
            || JSON.stringify(newData) !== JSON.stringify(data)){
                return true;
        }
        return false;
    }
    componentDidUpdate(prevProps, prevState) {
        if(JSON.stringify(prevProps.filter) !== JSON.stringify(this.props.filter)){
            this.props.getUserCarsAsync(this.props.filter);
        }

    }
    render() {
        const {data,status} = this.props.userCars
        return(
            <>
            <div className='cars'>
                {
                    data && data.map((car)=>{
                        return(
                            <CarList   modelId={car.Model.model}
                                       brandId={car.Brand.brand}
                                       carLicensePlate={car.carLicensePlate}
                                       year={car.year}
                            />
                        )
                   })
                }
                {data?.length === 0 && status===REQUEST_STATUSES.SUCCESS && (
                    <CarComponent text="YOU DON'T HAVE CAR OF THIS FILTER."/>
                )}
                {status===REQUEST_STATUSES.LOADING && data?.length === 0 && (
                    <LoadingSpinner/>
                )}
            </div>

            </>
        )
    }
}
const mapStateToProps = store =>({
    userCars: store.cars,
    filter:store.filter
})
function mapDispatchToProps(dispatch) {
    return {
       getUserCarsAsync: getUserCarsAsync(dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cars)