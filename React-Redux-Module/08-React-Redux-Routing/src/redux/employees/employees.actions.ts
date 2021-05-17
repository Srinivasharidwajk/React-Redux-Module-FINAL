import axios from 'axios';
import {IEmployee} from "../../modules/employees/models/IEmployee";

export const FETCH_EMPLOYEES_REQUEST : string = 'FETCH_EMPLOYEES_REQUEST';
export const FETCH_EMPLOYEES_SUCCESS : string = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE : string = 'FETCH_EMPLOYEES_FAILURE';

export const FETCH_SINGLE_EMPLOYEE_REQUEST : string = 'FETCH_SINGLE_EMPLOYEE_REQUEST';
export const FETCH_SINGLE_EMPLOYEE_SUCCESS : string = 'FETCH_SINGLE_EMPLOYEE_SUCCESS';
export const FETCH_SINGLE_EMPLOYEE_FAILURE : string = 'FETCH_SINGLE_EMPLOYEE_FAILURE';

export const fetchEmployees = () => {
    return async (dispatch : any) => {
        try {
            dispatch({type : FETCH_EMPLOYEES_REQUEST});
            let dataURL : string = 'https://gist.githubusercontent.com/thenaveensaggam/270f3990f36d1c1ad71cab4f06c8e67b/raw/77e0eb4c3d2cbafe88901006dac4e8daf2705f82/contacts.04022021.json';
            let response = await axios.get(dataURL);
            dispatch({
                type : FETCH_EMPLOYEES_SUCCESS,
                payload : {
                    employees : response.data
                }
            });
        }
        catch (error) {
            console.error(error);
            dispatch({
                type : FETCH_EMPLOYEES_FAILURE,
                payload : {
                    error : error.message
                }
            });
        }
    };
};

export const fetchSingleEmployee = (employeeId:string) => {
    return async (dispatch : any) => {
        try {
            dispatch({type : FETCH_SINGLE_EMPLOYEE_REQUEST});
            let dataURL : string = 'https://gist.githubusercontent.com/thenaveensaggam/270f3990f36d1c1ad71cab4f06c8e67b/raw/77e0eb4c3d2cbafe88901006dac4e8daf2705f82/contacts.04022021.json';
            let response = await axios.get(dataURL);
            let employees:IEmployee[] = response.data;
            let selectedEmployee : IEmployee | undefined = employees.find(employee => employee.login.uuid === employeeId);
            if(selectedEmployee){
                dispatch({
                    type : FETCH_SINGLE_EMPLOYEE_SUCCESS,
                    payload : {
                        selectedEmployee : selectedEmployee
                    }
                });
            }
        }
        catch (error) {
            console.error(error);
            dispatch({
                type : FETCH_SINGLE_EMPLOYEE_FAILURE,
                payload : {
                    error : error.message
                }
            });
        }
    };
};