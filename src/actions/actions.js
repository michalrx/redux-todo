import { ADD_TODO, INCREASE_COUNTER, DECREASE_COUNTER } from './types'

export const addTodo = (text) => {
    const addTodoAction = {
        type: ADD_TODO,
        text: text
    };
    console.log('Wykonujemy akcje ', addTodoAction);
    return addTodoAction;
};

export const increaseCounter = () => {
    const increaseCounterAction = {
        type: INCREASE_COUNTER,
    };
    return increaseCounterAction;
};

export const decreaseCounter = () => {
    const decreaseCounterAction = {
        type: DECREASE_COUNTER,
    };
    return decreaseCounterAction;
};