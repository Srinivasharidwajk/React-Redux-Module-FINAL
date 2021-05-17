import {combineReducers} from 'redux';
import * as authReducer from './auth-user/auth.reducer';
import * as hobbyReducer from './hobby-selector/hobby-selector.reducer';
import * as employeeReducer from './employees/employee.reducer';

let rootReducer = combineReducers({
    authUser : authReducer.reducer,
    hobby : hobbyReducer.reducer,
    employee : employeeReducer.reducer
});
export default rootReducer;