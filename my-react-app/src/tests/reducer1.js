// import {USER_CAR_FAIL,USER_CAR_REQUEST,USER_CAR_SUCCESS} from "../../tests/userCars_actionType";
// import {REQUEST_STATUSES} from "../../utils/constants";
//
// const initialState = {
//     status:'initial',
//     data: null,
//     error: null
// };
//
// const getUserCarsReducer =(state= initialState,action) =>{
//     switch (action.type){
//         case USER_CAR_REQUEST:
//             return{...state, status:REQUEST_STATUSES.LOADING, error: null,data:null}
//         case USER_CAR_SUCCESS:
//             return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: null,}
//         case USER_CAR_FAIL:
//             return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload,}
//     }
//     return state
// }
// export default (getUserCarsReducer)