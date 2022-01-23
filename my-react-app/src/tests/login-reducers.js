// import {LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST,} from "../../tests/actionTypes";
//
// const initialState = {
//     status:'initial',
//     data: null,
//     error: null,
//     token:''
// }
// const loginReducer =(state= initialState,action) =>{
//     switch (action.type){
//         case LOGIN_REQUEST:
//             return {...state,status: 'loading-login' ,error:null,data:null}
//         case LOGIN_SUCCESS:
//             return{...state, data:action.payload,status:'success-login',error: null,}
//         case LOGIN_FAIL:
//             return {...state,status: 'failure-login',error: action.payload,}
//     }
//     return state
// }
// export default loginReducer;