import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import {hunting_game} from "./reducer/hunting_game_reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combineReducers(
    {
        huntingGame:hunting_game

    }),composeEnhancers(applyMiddleware(thunk)));
