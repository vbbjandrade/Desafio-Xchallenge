import { combineReducers } from 'redux';
import fields from '../reducers/auth/reducer.js';

const rootReducer = combineReducers({
    data: fields,
});

export default rootReducer;