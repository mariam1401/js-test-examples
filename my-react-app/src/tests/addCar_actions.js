import{ADD_CAR_FAIL,ADD_CAR_REQUEST,ADD_CAR_SUCCESS} from "./addCar_actionsTypes";
import axios from "axios";

// export function addCarrAsync(dispatch) {
//     debugger;
//     return (data) => {
//         dispatch({
//             type: ADD_CAR_REQUEST
//         })
//         axios.post('http://localhost:8080/cars/',data,{ headers:{
//                 token: localStorage.getItem('token'),
//             }}
//         )
//             .then(response=>{
//                 dispatch({
//                     type:ADD_CAR_SUCCESS,
//                     payload:response.data
//                 })
//             })
//             .catch(error=>{
//                 dispatch({
//                     type:ADD_CAR_FAIL,
//                     payload:error
//                 })})
//     }
// }