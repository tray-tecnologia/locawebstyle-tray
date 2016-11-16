import { createStore } from 'redux';
import editableReducer from './Reducers.jsx';
import { addEditable } from './Actions.jsx';

const store = createStore(editableReducer);

export default store;
