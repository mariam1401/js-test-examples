// import axios from "axios";
// import {ADD_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS} from "../../tests/actionTypes";
// export function addUserAsync (dispatch){
//     debugger;
//  return (data) =>{
//      dispatch({
//          type: ADD_USER_REQUEST,
//          loading:false
//      })
//   axios.post('http://localhost:8080/registration', data)
//
//       .then(response =>{
//
//           dispatch({
//               type:ADD_USER_SUCCESS,
//               payload:response.data
//           })
//       })
//       .catch(error =>{
//        console.log(error);
//           dispatch({
//               type:ADD_USER_FAIL,
//               payload:error
//           })
//       });
//  }
//
// }
