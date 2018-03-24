import {ADD_TODO, DECREASE_COUNTER, INCREASE_COUNTER} from "../actions/types";

const initialState =  {
    todos: [],
    counter: 0
};

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_TODO):
            const newState = Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text
                    }
                ]
                });
            return newState;
        case(INCREASE_COUNTER):
            const newState = state+1;
            return newState;
        case(DECREASE_COUNTER):
            const newState = state-1;
            return newState<0 ? newState : 0;
        default:
            return state;
    }
}