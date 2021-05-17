import * as employeeActions from './employee.actions';
export interface IEmployee {
    sno : string;
    name : string;
    age : number;
    designation : string;
}
export interface EmployeeState {
    employees : IEmployee[]
}

let initialState:EmployeeState = {
    employees : [
        {
            sno : 'AA1021',
            name : 'Rajan',
            age  : 25,
            designation : 'Software Engineer'
        },
        {
            sno : 'AA1022',
            name : 'Mahesh',
            age  : 28,
            designation : 'Tech Lead'
        },
        {
            sno : 'AA1023',
            name : 'Wilson',
            age  : 45,
            designation : 'Project Manager'
        },
        {
            sno : 'AA1024',
            name : 'Laura',
            age  : 55,
            designation : 'Director'
        }
    ]
};

export const reducer = (state = initialState , action:employeeActions.ActionType):EmployeeState => {
    switch(action.type) {
        case employeeActions.FETCH_EMPLOYEES:
            return {
                ...state
            };
        default : return state;
    }
};