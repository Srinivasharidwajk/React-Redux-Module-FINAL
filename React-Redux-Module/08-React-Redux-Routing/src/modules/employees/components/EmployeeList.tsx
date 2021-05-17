import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as employeeActions from '../../../redux/employees/employees.actions';
import * as employeeReducer from '../../../redux/employees/employees.reducer';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../layout/components/spinner/Spinner";

interface IProps {}
interface IState {
    employee : employeeReducer.EmployeeState
}

let EmployeeList:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let employeeState:employeeReducer.EmployeeState = useSelector((state : IState) => {
        return state.employee;
    });

    let {loading, employees ,error} = employeeState;

    useEffect(() => {
        // dispatch an action to fetch data from server and store in the Redux
        dispatch(employeeActions.fetchEmployees());
    }, []);

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success">Employee List</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur ea explicabo laboriosam nisi non pariatur, possimus quaerat quas sequi. Aliquid aperiam illo ipsa ipsum, nisi repellat veniam. Laborum, omnis.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {
                    loading ? <Spinner/> :
                        <React.Fragment>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <table className="table table-hover text-center table-striped">
                                            <thead className="bg-success text-white">
                                            <tr>
                                                <th>SNO</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Email</th>
                                                <th>Location</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                employees.map(employee => {
                                                    return (
                                                        <tr key={employee.login.uuid}>
                                                            <td>{employee.login.uuid.substr(employee.login.uuid.length - 5)}</td>
                                                            <td>
                                                                <img src={employee.picture.large} alt="" width="50" height="50"/>
                                                            </td>
                                                            <td>
                                                                <Link to={`/employees/${employee.login.uuid}`} className="text-success font-weight-bold">{employee.name.title}. {employee.name.first} {employee.name.last}</Link>
                                                            </td>
                                                            <td>{employee.dob.age} yrs</td>
                                                            <td>{employee.email}</td>
                                                            <td>{employee.location.city}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                }
            </section>
        </React.Fragment>
    );
};
export default EmployeeList;