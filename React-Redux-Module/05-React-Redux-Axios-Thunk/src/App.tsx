import React from 'react';
import './App.css';
import UserList from "./components/UserList";
import UserData from "./components/UserData";
import Spinner from "./components/layout/Spinner";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Redux - Conditional & Looping</a>
           </nav>
          <UserData/>
        </React.Fragment>
    );
};
export default App;
