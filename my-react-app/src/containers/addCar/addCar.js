import React from 'react'
import styles1 from './addCar.module.css'
import image from '../../assets/images/compositor.jpeg'
import {connect} from "react-redux";
import {addCarAsync,getAllBrandsAsync,getAllModelsAsync} from "../../redux/actions/carActions";
import {REQUEST_STATUSES} from "../../utils/constants";
import Loading from "../../components/state_component/loading_state/loading";
import SuccessState from "../../components/state_component/success_state/successState";
import Error_state from "../../components/state_component/error_state/error_state";
import left_arrow from '../../assets/images/left-arrow.png'
import {Link,withRouter} from "react-router-dom";
class AddCar extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {
        carLicensePlate: null,
        modelId: null,
        brandId: null,
        year: null,
        yearError: null,
        carLicensePlateError: null,
        modelIdError: null,
        brandIdError: null,
    }
    componentDidMount=()=>{
        this.props.getAllBrandsAsync();
        this.props.getAllModelsAsync();
    }

    handleInputChange =event=>{
        const target = event.target;
        let value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }
    validate=()=> {
        let carLicensePlateError = '';
        let modelIdError = '';
        let brandIdError = '';
        let yearError = ''

        const reg1 = /^[0-9]{2}[A-Z]{2}[0-9]{3}$/;
        if (!this.state.carLicensePlate || reg1.test(this.state.carLicensePlate) === false) {
            carLicensePlateError = 'car License Plate Field is Invalid';
        } else if (this.state.carLicensePlate === null) {
            carLicensePlateError = 'car License Plate field is required'
        }
        if (!this.state.modelId) {
            modelIdError = 'Model  field is required';
        }
        if (!this.state.year) {
            yearError = ' Year field is required';
        }
        if(!this.state.brandId ){
            brandIdError = 'Brand  field is required';
        }
        if (carLicensePlateError || modelIdError || brandIdError || yearError) {
            this.setState({carLicensePlateError, modelIdError, brandIdError, yearError});
            return false;
        }
        return true
    }

    submit = () => {
        if (this.validate()) {
            this.props.addCarAsync((this.state));
            this.setState({
                carLicensePlate: '',
                modelId: '',
                brandId: '',
                year: ''
            })
        }
    }

    render() {
        const{status}= this.props.addCar
        const{data: brandsData}=this.props.getBrands
        const {data:modelData}= this.props.getModel
        return(
            <>
            <div className={styles1.container}>
                <div className={styles1.leftPart}>
                    <div>
                        <div>
                        <label>ADD CAR</label>
                        <p>You can add your car</p>
                        </div>
                        <img src={image}/>
                        <Link to='home'><img src={left_arrow} className={styles1.arrow}/></Link>
                    </div>
                </div>
                {status === 'initial'&& (
                        <div className={styles1.rightPart}>
                            <div className={styles1.form}>
                                <p>Car details</p>
                                <div>
                                    <div>
                                        <label>Car License Plate</label>
                                        <input type="text" name='carLicensePlate' onChange={this.handleInputChange} value={this.state.carLicensePlate}/>
                                        <span className="text-danger"> {this.state.carLicensePlateError}</span>
                                    </div>
                                    <div>
                                        <label>Brand </label>
                                        <select name='brandId' className={styles1.select} onChange={this.handleInputChange} value={this.state.brandId}>
                                            <option value={-1}>Select Brand</option>
                                            {brandsData && brandsData.map(({ brand,id })=>{
                                                    return(
                                                        <option value={id}>{brand}</option>
                                                    )
                                                }
                                            )}
                                        </select>
                                        <span className="text-danger"> {this.state.brandIdError}</span>
                                    </div>
                                    <div>
                                        <label>Model </label>
                                        <select name='modelId' className={styles1.select} onChange={this.handleInputChange} value={this.state.modelId}>

                                            <option value={-1}>Select Model</option>
                                            {modelData && modelData.map(({model, id})=>{
                                                    return(
                                                        <option value={id}>{model}</option>
                                                    )
                                                }
                                            )}
                                        </select>
                                        <span className="text-danger"> {this.state.modelIdError}</span>
                                    </div>
                                    <div>
                                        <label>Year</label>
                                        <select name='year' className={styles1.select} onChange={this.handleInputChange} value={this.state.year}>
                                            <option value={-1}>Select Year</option>
                                            {[2021,2020,2019].map((car)=>{
                                                    return(
                                                        <option value={car}>{car}</option>
                                                    )
                                                }
                                            )}
                                        </select>
                                        <span className="text-danger"> {this.state.yearError}</span>
                                    </div>
                                    <div><button className={styles1.add}  onClick={() => this.submit()}>Add car</button></div>
                                </div>
                            </div>
                        </div>
                )}
                {status === REQUEST_STATUSES.LOADING && (
                    <Loading/>
                )}
                {status === REQUEST_STATUSES.SUCCESS && (
                    <SuccessState/>
                )}
                {status === REQUEST_STATUSES.ERROR && (
                    <Error_state/>
                )}
            </div>
                    {/*{status === REQUEST_STATUSES.LOADING && (*/}
                    {/*    <Loading/>*/}
                    {/*)}*/}
                    {/*{status === REQUEST_STATUSES.SUCCESS && (*/}
                    {/*    <SuccessState/>*/}
                    {/*)}*/}
                    {/*{status === REQUEST_STATUSES.ERROR && (*/}
                    {/*    <Error_state/>*/}
                    {/*)}*/}
            </>
        )
    }
}
const mapStateToProps = store =>({
    addCar: store.car,
    getBrands: store.brand,
    getModel:store.model
});
function mapDispatchToProps(dispatch) {
    return {
        addCarAsync:addCarAsync(dispatch),
        getAllModelsAsync:getAllModelsAsync(dispatch),
        getAllBrandsAsync:getAllBrandsAsync(dispatch),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddCar))