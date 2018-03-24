import {DECREASE_COUNTER, INCREASE_COUNTER} from "../actions/types";

export const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case(INCREASE_COUNTER):
            return state + 1;
        case(DECREASE_COUNTER):
            const newState = state-1;
            return newState>0 ? newState : 0;
        default:
            return state;
    }
}