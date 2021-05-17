export const FETCH_EMPLOYEES:string = 'FETCH_EMPLOYEES';

export interface ActionType {
    type : string;
}

export const fetchEmployees = ():ActionType => {
    return {
        type : FETCH_EMPLOYEES
    }
};