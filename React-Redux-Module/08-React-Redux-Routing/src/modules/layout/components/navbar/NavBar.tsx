import React from 'react';
import {NavLink} from 'react-router-dom';

interface IProps {}
interface IState {}

let NavBar:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <NavLink to={'/'} className="navbar-brand">
                        <i className="fa fa-route"/> React Routing</NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={'/employees'} activeClassName="active" className="nav-link">Employees</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/stocks'} activeClassName="active" className="nav-link">Stocks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/about'} activeClassName="active" className="nav-link">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};
export default NavBar;