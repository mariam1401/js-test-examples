import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom";
import {getAllModelsAsync, getAllBrandsAsync, getUserCarsAsync,setFilteredItems} from "../../../redux/actions/carActions";
import {REQUEST_STATUSES} from "../../../utils/constants"
import './carFilters.modules.css'
import LoadingSpinner from "../cars/component/loadingSpiner";
import {CarComponent} from "./component/carComponent";
import {getUrlParameter} from "../../../utils/utils4";
class CarFilters extends React.Component{
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.selectModelRef = React.createRef()
        this.selectBrandRef = React.createRef()
        this.selectYearRef=React.createRef()
    }
    componentDidMount=()=> {
        debugger;
        this.props.getAllBrandsAsync();
        this.props.getAllModelsAsync();
        const modelId = getUrlParameter("modelId");
        const brandId = getUrlParameter("brandId");
        const year = getUrlParameter("year");
        const carLicensePlate = getUrlParameter("carLicensePlate");
        this.props.setFilteredItems({modelId,brandId,year,carLicensePlate})
    }
    submit=()=>{
        const carLicensePlate=this.inputRef.current.value
        const modelId = this.selectModelRef.current.value
        const brandId = this.selectBrandRef.current.value
        const year = this.selectYearRef.current.value
        this.props.history.push({
        pathname: '/home',
        search:"?" + new URLSearchParams(
            {carLicensePlate:carLicensePlate,modelId:modelId, brandId:brandId,year:year}).toString()
        })
        this.props.setFilteredItems({
            carLicensePlate:carLicensePlate,
            modelId:modelId,
            brandId:brandId,
            year:year,
        })
        console.log(this.state.checked,'year')
    }
    handleInputChange=(event)=> {
        const target = event.target;
        let value = target.value;
        if(target.checked){
            this.state.year= value;
        }
    }

    enterEvent=(e)=> {
      if (e.keyCode === 13) {
      this.submit()
      }
    }
    render() {
        const {data: brandData}=this.props.brand;
        const {data: modelData}=this.props.model;
        const {status,data}=this.props.cars
        const { filter:{modelId,brandId,year,carLicensePlate} }=this.props
        const {data:filterData}=this.props.filter

        debugger;
        return (
   <>
           <div className="filters">
               <div className="car_filters">
                   <div className="year_models">
                       <p className="year_model-header"/>Model Year
                       {/*{[2021,2020,2019].map((years) => (*/}
                           <div className='years'>
                               <input
                                   type='checkbox'
                                   name='year'
                                   value='2021'
                                   ref={this.year1Input}
                                   defaultValue={year}
                                   defaultChecked={false}
                                   //onChange={this.handleInputChange}
                                   onKeyUp={this.enterEvent}
                               />
                               {'2021'}
                           </div>
                       <div className='years'>
                           <input
                               type='checkbox'
                               name='year'
                               value='2020'
                               ref={this.year2Input}
                               defaultValue={year}
                               defaultChecked={false}
                               //onChange={this.handleInputChange}
                               onKeyUp={this.enterEvent}
                           />
                           {'2021'}
                       </div>
                       <div className='years'>
                           <input
                               type='checkbox'
                               name='year'
                               //value={years}
                               ref={this.year3Input}
                               defaultValue={year}
                               defaultChecked={false}
                               //onChange={this.handleInputChange}
                               onKeyUp={this.enterEvent}
                           />
                           {'2021'}
                       </div>
                       {/*))}*/}
                   </div>
                   <div className="car_details">
                       <label> Car License Plate</label>
                       <input type='text'
                              onKeyUp={this.enterEvent}
                              name='carLicensePlate'
                              ref={this.inputRef}
                              defaultValue={carLicensePlate}
                       />
                   </div>
                   <div className="car_details">
                       <label> Model</label>
                       <select
                           ref={this.selectModelRef}
                           onKeyPress={() => this.submit()}
                           name='modelId'
                           defaultValue={modelId}
                       >
                           <option value=''>Select Model</option>
                           {modelData && modelData.map(({model, id}) => {
                               return (
                                   <option value={id}>{model}</option>
                               )
                           })}
                       </select>
                   </div>
                   <div className="car_details">
                       <label> Brand</label>
                       <select
                           ref={this.selectBrandRef}
                           onKeyPress={() => this.submit()}
                           name='brandId'
                           defaultValue={brandId}
                       >
                           <option value=''>Select Brand</option>
                           {brandData && brandData.map(({brand, id}) => {
                               return (
                                   <option value={id}>{brand}</option>
                               )
                           })}
                       </select>
                   </div>
                   <button onClick={() => this.submit()}>filter</button>
               </div>
           </div>
       {/*{data?.length === 0 && status===REQUEST_STATUSES.SUCCESS && (*/}
       {/* <CarComponent text="YOU DON'T HAVE CAR OF THIS FILTER."/>*/}
       {/*)}*/}
       {/*{status===REQUEST_STATUSES.LOADING && data?.length === 0 && (*/}
       {/*   <LoadingSpinner/>*/}
       {/*)}*/}

   </>
        );
    }
}
const mapStateToProps = store =>({
    brand:store.brand,
    model:store.model,
    cars:store.cars,
    filter:store.filter
})
function mapDispatchToProps(dispatch) {
    return {
        getUserCarsAsync:getUserCarsAsync(dispatch),
        getAllModelsAsync:getAllModelsAsync(dispatch),
        getAllBrandsAsync:getAllBrandsAsync(dispatch),
        setFilteredItems:setFilteredItems(dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CarFilters))