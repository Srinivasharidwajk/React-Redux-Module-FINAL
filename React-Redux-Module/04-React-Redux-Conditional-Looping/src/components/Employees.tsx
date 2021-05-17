import React, {useEffect} from 'react';
import * as employeeActions from '../redux/employees/employee.actions';
import * as employeeReducer from '../redux/employees/employee.reducer';
import {useDispatch , useSelector} from "react-redux";

interface IEmployee {
    sno : string;
    name : string;
    age : number;
    designation : string;
}
interface IProps {}
interface IState {
   employee : employeeReducer.EmployeeState
}

let Employees:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let employeeState:employeeReducer.EmployeeState = useSelector((state:IState) => {
        return state.employee;
    });

    useEffect(() => {
        dispatch(employeeActions.fetchEmployees());
    }, [])

    let {employees} = employeeState;

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                employees.map(employee => {
                                    return (
                                        <div key={employee.sno} className="card mt-3">
                                            <div className="card-body bg-info">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        Employee ID :  {employee.sno}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Name :  {employee.name}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Age :  {employee.age}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Designation :  {employee.designation}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default Employees;