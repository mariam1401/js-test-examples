import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import {loginReducer,userReducer} from "./reducers/userReducers";
import{car,allCars,cars,brand,model,filter} from "./reducers/carReducers"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combineReducers(
{
          addUser: userReducer,
          userLogin:loginReducer,
          car:car,
          allCars:allCars,
          cars:cars,
          brand:brand,
          model:model,

          filter:filter
}),composeEnhancers(applyMiddleware(thunk)));
