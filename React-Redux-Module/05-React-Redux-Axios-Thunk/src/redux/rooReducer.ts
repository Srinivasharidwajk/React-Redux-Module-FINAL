import {combineReducers} from 'redux';
import * as userReducer from './users/user.reduer';

let rootReducer = combineReducers({
    userList : userReducer.reducer
});
export default rootReducer;