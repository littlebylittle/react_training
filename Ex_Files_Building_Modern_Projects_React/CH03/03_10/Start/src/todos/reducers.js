import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from './actions';

// @im: logic related to the under the hood; MAPPING actions to the STATE ADJUSTMENT; 
export const todoReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        return state.concat(newTodo);
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    case COMPLETE_TODO: {
        const { text } = payload;
        let old = state.filter(todo => todo.text !== text);
        const completedTodo = {
            text,
            isCompleted: true,
        };
        return old.concat(completedTodo);
    }
    default:
        console.log("something went wrong..")
        return state;
    }
}