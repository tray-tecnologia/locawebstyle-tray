import { createStore } from 'redux';
import reducers from './Reducers.jsx';

const store = createStore(reducers);

export default store;
