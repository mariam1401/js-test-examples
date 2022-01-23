import {FILTER_CAR,ALL_CAR_REQUEST,ALL_CAR_SUCCESS,ALL_CAR_FAIL,CAR_FILTER_REQUEST,CAR_FILTER_SUCCESS,CAR_FILTER_FAIL,ADD_CAR_REQUEST,ADD_CAR_SUCCESS,ADD_CAR_FAIL,ALL_MODEL_FAIL,ALL_BRAND_FAIL,ALL_MODEL_REQUEST,ALL_BRAND_SUCCESS,ALL_BRAND_REQUEST,ALL_MODEL_SUCCESS,ALL_YEAR_SUCCESS,ALL_YEAR_REQUEST,ALL_YEAR_ERROR,ALL_USER_CARS_SUCCESS,ALL_USER_CARS_REQUEST,ALL_USER_CARS_ERROR} from "../actionTypes/carActionTypes";
import axios from "axios";

function getUserCarsAsync(dispatch){
     debugger;
    return (filter) => {
        dispatch({
            type:ALL_USER_CARS_REQUEST
        })
        axios.get('http://localhost:8080/myCars/',{
            headers:{
                token: localStorage.getItem('token'),
            },
            params: filter
        }).then(response =>{
                dispatch({
                    type:ALL_USER_CARS_SUCCESS,
                    payload:response.data
                })
            })
            .catch(error =>{
                console.log(error);
                dispatch({
                    type:ALL_USER_CARS_ERROR,
                    payload:error
                })
            });
         }
      }
function setFilteredItems(dispatch){
    return (data)=>{
        dispatch({
            type: FILTER_CAR,
            payload: data
        })
    }
}
function addCarAsync(dispatch) {
    return (data) => {
        dispatch({
            type: ADD_CAR_REQUEST
        })
        axios.post('http://localhost:8080/cars/',data,{ headers:{
                token: localStorage.getItem('token'),
            }}
        )
            .then(response=>{
                dispatch({
                    type:ADD_CAR_SUCCESS,
                    payload:response.data
                })
            })
            .catch(error=>{
                dispatch({
                    type:ADD_CAR_FAIL,
                    payload:error
                })
            })
        }
    }
const getAllCarsAsync = (dispatch) => {
    return (data) => {
        dispatch({
            type:ALL_CAR_REQUEST
        })
        axios.get('http://localhost:8080/cars/',data)
            .then(response => dispatch({
                type: ALL_CAR_SUCCESS,
                payload:response.data}))
            .catch(error=>{
                dispatch({
                    type:ALL_CAR_FAIL,
                    payload:error

                })
            })
        }
    }
const getAllBrandsAsync = (dispatch) => {
    return (data) => {
        dispatch({
            type:ALL_BRAND_REQUEST
        })
        axios.get('http://localhost:8080/brand/',data)
            .then(response => dispatch({
                type: ALL_BRAND_SUCCESS,
                payload:response.data}))
            .catch(error=>{
                dispatch({
                    type:ALL_BRAND_FAIL,
                    payload:error

                })
            })
    }
}
const getAllModelsAsync = (dispatch) => {
    return (data) => {
        dispatch({
            type:ALL_MODEL_REQUEST
        })
        axios.get('http://localhost:8080/model/',data)
            .then(response => dispatch({
                type: ALL_MODEL_SUCCESS,
                payload:response.data}))
            .catch(error=>{
                dispatch({
                    type:ALL_MODEL_FAIL,
                    payload:error

                })
        })
    }
}


export  {getAllCarsAsync,addCarAsync,getAllModelsAsync,getAllBrandsAsync,getUserCarsAsync,setFilteredItems}