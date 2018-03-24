import { ADD_TODO } from '../actions/types';

const todoReducer = (state = [], action) => {
    switch(action.type) {
        case(ADD_TODO): 
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
}

export default todoReducer;