// import {LOGIN_REQUEST,LOGIN_FAIL,LOGIN_SUCCESS} from "../../tests/actionTypes";
// import axios from "axios";
//
// export function loginAsync (dispatch){
//     return(data)=>{
//         dispatch({
//             type:LOGIN_REQUEST,
//         })
//         axios.post('http://localhost:8080/login', data)
//             .then(response=>{
//                 dispatch({
//                     type:LOGIN_SUCCESS,
//                     payload:response.data
//                 })
//             })
//             .catch(error=>{
//                 console.log(error);
//                 dispatch({
//                     type:LOGIN_FAIL,
//                     payload:error
//
//                 })
//             });
//     }
// }