import {createStore, combineReducers} from 'redux';
import {savingReducer} from './reducers';

const store = createStore(savingReducer);

export default store;
