import { createStore, combineReducers } from 'redux';
import lists from './todoListReducer';
import settings from './settingsReducer';

// Create a store with our reducer
const store = createStore(combineReducers({ lists, settings }));

export default store;
