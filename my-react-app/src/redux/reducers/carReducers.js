import {
    ADD_CAR_REQUEST,
    ADD_CAR_SUCCESS,
    ADD_CAR_FAIL,
    ALL_CAR_SUCCESS,
    ALL_CAR_REQUEST,
    ALL_CAR_FAIL,
    ALL_BRAND_SUCCESS,
    ALL_BRAND_REQUEST,
    ALL_BRAND_FAIL,
    ALL_MODEL_REQUEST,
    ALL_MODEL_SUCCESS,
    ALL_MODEL_FAIL,
    ALL_USER_CARS_SUCCESS,
    ALL_USER_CARS_ERROR,
    ALL_USER_CARS_REQUEST,
    FILTER_CAR
} from "../actionTypes/carActionTypes";
import {REQUEST_STATUSES} from "../../utils/constants";

const initialState={
    status:'initial',
    data:[],
    error:'',
}
const cars =(state=initialState,action) =>{
    // debugger;
    switch (action.type){
        case ALL_USER_CARS_REQUEST:
            return {...state, status:REQUEST_STATUSES.LOADING}
        case ALL_USER_CARS_SUCCESS:
            return {...state, data:action.payload, status:REQUEST_STATUSES.SUCCESS}
        case ALL_USER_CARS_ERROR:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload}
    }
    return state
}
const initialStates={
    modelId:'',
    brandId:'',
    year:'',
    carLicensePlate:'',
}
const filter=(state=initialStates,action)=>{
    //debugger;
    switch (action.type){
        case FILTER_CAR:
         return {
             ...state,
             ...action.payload
         }
    }
return state
}
const allCars =(state= initialState,action) =>{
    switch (action.type){
        case ALL_CAR_REQUEST:
            return{...state, status:REQUEST_STATUSES.LOADING, error: null,data:null}
        case ALL_CAR_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: null,}
        case ALL_CAR_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload,}
    }
    return state
}
const brand =(state= initialState,action) =>{
    switch (action.type){
        case ALL_BRAND_REQUEST:
            return{...state, status:REQUEST_STATUSES.LOADING, error: null,data:null}
        case ALL_BRAND_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: null,}
        case ALL_BRAND_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload,}
    }
    return state
}
const model=(state= initialState,action) =>{
    switch (action.type){
        case ALL_MODEL_REQUEST:
            return{...state, status:REQUEST_STATUSES.LOADING}
        case ALL_MODEL_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS}
        case ALL_MODEL_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload,}
    }
    return state
}
const car=(state=initialState,action)=>{
    switch (action.type){
        case ADD_CAR_REQUEST:
            return {...state,status:REQUEST_STATUSES.LOADING}
        case ADD_CAR_SUCCESS:
            return {...state,status:REQUEST_STATUSES.SUCCESS,data:action.payload}
        case ADD_CAR_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload}
    }
    return state
}



export {car,allCars,cars,model,brand,filter}