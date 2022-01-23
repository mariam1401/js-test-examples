// import {ADD_CAR_FAIL,ADD_CAR_REQUEST,ADD_CAR_SUCCESS} from "../../tests/addCar_actionsTypes";
//
// const initialState={
//     status:'initial',
//     data:null,
//     error:null,
// }
// const addCarReducer =(state=initialState,action)=>{
//     switch (action.type){
//         case ADD_CAR_REQUEST:
//             return {...state,status:'loading addCar',data:null,error:null}
//         case ADD_CAR_SUCCESS:
//             return {...state,status:'addCar success',error: null}
//         case ADD_CAR_FAIL:
//             return {...state,status: 'addCar fail',data: null}
//     }
//     return state
// }
// export default addCarReducer