import { combineReducers } from 'redux';
import loginReducerTest from './loginReducerTest';
// import loginReducerTest from './loginReducerTest';

// We call state in here
export default combineReducers({
    logg:  loginReducerTest
    // the 'logg' to match with the store in views
});