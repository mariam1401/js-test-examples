// import {USER_CAR_FAIL, USER_CAR_SUCCESS,USER_CAR_REQUEST} from "../actionTypes/userCars_actionType";
// import axios from "axios";
//
// export const getUserCarsAsync = (dispatch) => {
//     return (data) => {
//         dispatch({
//             type:USER_CAR_REQUEST
//         })
//         axios.get('http://localhost:8080/cars/', {headers:{
//                 token: localStorage.getItem('token'),
//             }
//         }).then(response => dispatch({
//                 type: USER_CAR_SUCCESS,
//                 payload:response.data}))
//             .catch(error=>{
//                 dispatch({
//                     type:USER_CAR_FAIL,
//                     payload:error
//
//                 })
//             })
//     }
// }