import {CAR_FILTER_REQUEST,CAR_FILTER_SUCCESS,CAR_FILTER_FAIL} from "./carFilters_actionsType";
import axios from "axios";

// export function carFiltersAsync(dispatch){
//     return(data)=>{
//         dispatch({
//             type:CAR_FILTER_REQUEST
//         })
//         axios.get('http://localhost:8080/cars/',{
//             headers:{
//                 token: localStorage.getItem('token'),
//             },
//             params: {
//                     modelId: data.modelId,
//                     brandId:data.brandId,
//                     carLicensePlate:data.carLicensePlate
//                 }
//         })
//         .then(response =>{
//             dispatch({
//                 type:CAR_FILTER_SUCCESS,
//                 payload:response.data
//             })
//         })
//             .catch(error =>{
//                 console.log(error);
//                 dispatch({
//                     type:CAR_FILTER_FAIL,
//                     payload:error
//                 })
//             });
//     }
// }
