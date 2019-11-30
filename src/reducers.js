import {combineReducers} from "redux";

export function todos(state={
    list:[]
}, action) {
    switch (action.type) {
        case "ADD_TO_DO":
            return Object.assign({}, state, {
                list: state.list.concat(action.todo)
            });

        case "REMOVE_TO_DO":
            return Object.assign({}, state, {
                list: state.list.filter(todo => {
                    return action.todo !== todo;
                })
            });

        default:
            return state;
    }
}

export default combineReducers({
    todos
});