import { combineReducers } from 'redux';

const initialState = {
    editable: false,
    items: [],
}

const editableReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_EDITABLE':
            return Object.assign({}, state, {
               editable: true
            });
        case 'REMOVE_EDITABLE':
            return Object.assign({}, state, {
               editable: false
            });
        case 'ADD_ITEMS':
            return Object.assign({}, state, {
               items: action.itemsData
            });
        default:
            return state;
    }
}

export default editableReducer;
