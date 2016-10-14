import { combineReducers } from 'redux';

const initialState = {
    editable: false,
    items: [],
}

const finalState = (action = {}, state = initialState) => {
    switch (action.type) {
        case 'ADD_EDITABLE':
            return Object.assign({}, state, {
               editable: true
            });
        default:
            return state;
    }
}

const itemsState = combineReducers({
    finalState
});

export default itemsState;
