import {combineReducers} from 'redux';
import * as employeeReducer from './employees/employees.reducer';

let rootReducer = combineReducers({
    [employeeReducer.employeeFeatureKey] : employeeReducer.reducer
});
export default rootReducer;