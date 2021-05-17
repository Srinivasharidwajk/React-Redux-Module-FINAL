import React, {useEffect} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import * as employeeActions from '../../../redux/employees/employees.actions';
import * as employeeReducer from '../../../redux/employees/employees.reducer';
import {useSelector, useDispatch} from "react-redux";
import Spinner from "../../layout/components/spinner/Spinner";

interface URLParams{
    employeeId : string;
}
interface IProps {}
interface IState {
    employee : employeeReducer.EmployeeState
}

let EmployeeDetails:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let {employeeId} = useParams<URLParams>();

     let employeeState:employeeReducer.EmployeeState = useSelector((state : IState) => {
        return state.employee;
    });

    let {loading, selectedEmployee} = employeeState;

    useEffect(() => {
        dispatch(employeeActions.fetchSingleEmployee(employeeId));
    }, [employeeId]);


    return (
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Employee Details</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis corporis delectus deserunt facere illo incidunt minima nam natus optio porro possimus qui quibusdam quod rem repellat, rerum tenetur voluptas!</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner/> :
                    <React.Fragment>
                        <section>
                            {
                                selectedEmployee !== undefined &&
                                Object.keys(selectedEmployee).length > 0 ?
                                    <React.Fragment>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="card">
                                                        <div className="card-header bg-primary text-white">
                                                            <p className="h3">{selectedEmployee.name.first} {selectedEmployee.name.last}</p>
                                                        </div>
                                                        <div className="card-body rgba-blue-light">
                                                            <div className="row align-items-center">
                                                                <div className="col-md-4">
                                                                    <img src={selectedEmployee.picture.large} className="img-fluid img-thumbnail" alt=""/>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item">
                                                                            AGE : {selectedEmployee.dob.age} yrs
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            Phone : {selectedEmployee.phone}
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            Email : {selectedEmployee.email}
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            Location : {selectedEmployee.location.city}
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer">
                                                            <NavLink to="/employees" className="btn btn-primary btn-sm">Back</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment> : null
                            }
                        </section>
                    </React.Fragment>
            }
        </React.Fragment>
    );
};
export default EmployeeDetails;