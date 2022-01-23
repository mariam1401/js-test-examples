import {ADD_USER_REQUEST,ADD_USER_SUCCESS,ADD_USER_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL} from "../actionTypes/userActionTypes";
import axios from "axios";

function loginAsync (dispatch){
    return(data)=>{
        dispatch({
            type:LOGIN_REQUEST,
        })
        axios.post('http://localhost:8080/login', data)
            .then(response=>{
                const { token } = response.data;
                localStorage.setItem('token', token);
                localStorage.getItem('token');
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:response.data
                })
            })
            .catch(error=>{
                console.log(error);
                dispatch({
                    type:LOGIN_FAIL,
                    payload:error

                })
            });
         }
    }
function addUserAsync (dispatch){
    debugger;
 return (data) =>{
     dispatch({
         type: ADD_USER_REQUEST,
         loading:false
     })
  axios.post('http://localhost:8080/registration', data)
      .then(response =>{

          dispatch({
              type:ADD_USER_SUCCESS,
              payload:response.data
          })
      })
      .catch(error =>{
       console.log(error);
          dispatch({
              type:ADD_USER_FAIL,
              payload:error
          })
      });
    }
}

export  {addUserAsync,loginAsync}