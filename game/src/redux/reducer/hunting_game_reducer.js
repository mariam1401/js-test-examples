import {HUNTING_GAME} from "../actionType/hunting_game_actionType";

const initialState={
    number:''
}

const hunting_game=(state=initialState,action)=>{
    switch (action.type){
        case HUNTING_GAME:
            return {
                ...state,
                ...action.payload
            }
    }
    return state
}
export {hunting_game}