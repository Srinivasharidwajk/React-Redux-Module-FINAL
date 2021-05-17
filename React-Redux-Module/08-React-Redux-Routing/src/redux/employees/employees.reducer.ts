import * as employeeActions from './employees.actions';
import {IEmployee} from "../../modules/employees/models/IEmployee";

export const employeeFeatureKey:string = 'employee';

export interface EmployeeState {
    loading : boolean;
    employees : IEmployee[];
    selectedEmployee : IEmployee;
    error : string;
}
let initialState : EmployeeState = {
    loading : false,
    employees : [] as IEmployee[],
    selectedEmployee : {} as IEmployee,
    error : ''
};
export const reducer = (state = initialState, action:any):EmployeeState => {
    switch (action.type) {
        // for all employees
        case employeeActions.FETCH_EMPLOYEES_REQUEST:
            return  {
                ...state,
                loading : true
            };
        case employeeActions.FETCH_EMPLOYEES_SUCCESS:
            return  {
                ...state,
                loading : false,
                employees : action.payload.employees
            };
        case employeeActions.FETCH_EMPLOYEES_FAILURE:
            return  {
                ...state,
                loading : false,
                error : action.payload.error
            };
        // for single employeee
        case employeeActions.FETCH_SINGLE_EMPLOYEE_REQUEST:
            return  {
                ...state,
                loading : true
            };
        case employeeActions.FETCH_SINGLE_EMPLOYEE_SUCCESS:
            return  {
                ...state,
                loading : false,
                selectedEmployee : action.payload.selectedEmployee
            };
        case employeeActions.FETCH_SINGLE_EMPLOYEE_FAILURE:
            return  {
                ...state,
                loading : false,
                error : action.payload.error
            };
        default : return state;
    }
};