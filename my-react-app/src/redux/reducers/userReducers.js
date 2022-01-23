import {ADD_USER_REQUEST,ADD_USER_SUCCESS,ADD_USER_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL} from "../actionTypes/userActionTypes";
import {REQUEST_STATUSES} from "../../utils/constants";
const initialState = {
    status:'initial',
    data: null,
    error: null,
    token:''
}
const loginReducer =(state= initialState,action) =>{
    switch (action.type){
        case LOGIN_REQUEST:
            return {...state,status:REQUEST_STATUSES.LOADING ,error:null,data:null}
        case LOGIN_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: null,}
        case LOGIN_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload,}
    }
    return state
}

const userReducer =(state= initialState,action) =>{
    switch (action.type){
        case ADD_USER_REQUEST:
            return{...state, status:REQUEST_STATUSES.LOADING, error: null,data:null}
        case ADD_USER_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: null,}
        case ADD_USER_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload,}
    }
    return state
}
export  {userReducer,loginReducer}
