// import{ADD_USER_REQUEST,ADD_USER_SUCCESS,ADD_USER_FAIL} from "../../tests/actionTypes";
//
// const initialState = {
//    status:'initial',
//     data: null,
//     error: null
// }
// const userReducer =(state= initialState,action) =>{
//     switch (action.type){
//         case ADD_USER_REQUEST:
//             return{...state, status:'loading', error: null,data:null}
//         case ADD_USER_SUCCESS:
//             return{...state, data:action.payload,status:'success',error: null,}
//         case ADD_USER_FAIL:
//             return {...state,status: 'failure',error: action.payload}
//     }
//     return state
// }
// export default userReducer;