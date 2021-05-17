import {combineReducers} from 'redux';
import * as userReducer from './user/user.reducer';

let rootReducer = combineReducers({
    users : userReducer.reducer
});
export default rootReducer;