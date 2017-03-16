import { combineReducers } from 'redux';

const initialState = {
    items: [],
}

const Reducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return Object.assign({}, state, {
               items: action.itemsData
            });
        default:
            return state;
    }
}

export default Reducers;
