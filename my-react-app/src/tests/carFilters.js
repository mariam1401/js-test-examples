// import {CAR_FILTER_REQUEST,CAR_FILTER_SUCCESS,CAR_FILTER_FAIL} from "../../tests/carFilters_actionsType";
// import {REQUEST_STATUSES} from "../../utils/constants";
//
// const initialState={
//     status:'initial',
//     data:'?',
//     error:null
// }
// const carReducer =(state= initialState,action) =>{
//     switch (action.type){
//         case CAR_FILTER_REQUEST:
//             return{...state, status:REQUEST_STATUSES.LOADING, error: null,data:null}
//         case CAR_FILTER_SUCCESS:
//             return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: null,}
//         case CAR_FILTER_FAIL:
//             return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload,}
//     }
//     return state
// }
// export default carReducer