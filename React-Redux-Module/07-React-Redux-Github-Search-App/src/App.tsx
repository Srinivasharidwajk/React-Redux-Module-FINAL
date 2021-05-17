import React from 'react';
import './App.css';
import GithubProfileSearchApp from "./components/GithubProfileSearchApp";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Redux - Github Profile Search</a>
           </nav>
            <GithubProfileSearchApp/>
        </React.Fragment>
    );
};
export default App;
