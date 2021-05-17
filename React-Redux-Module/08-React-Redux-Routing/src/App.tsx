import React from 'react';
import './App.css';
import {BrowserRouter , Route , Switch } from 'react-router-dom';
import NavBar from "./modules/layout/components/navbar/NavBar";
import Home from "./modules/layout/components/home/Home";
import About from "./modules/layout/components/about/About";
import StockList from "./modules/stocks/components/StockList";
import EmployeeList from "./modules/employees/components/EmployeeList";
import EmployeeDetails from "./modules/employees/components/EmployeeDetails";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/about'} component={About}/>
                    <Route exact path={'/employees'} component={EmployeeList}/>
                    <Route exact path={'/employees/:employeeId'} component={EmployeeDetails}/>
                    <Route exact path={'/stocks'} component={StockList}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};
export default App;
