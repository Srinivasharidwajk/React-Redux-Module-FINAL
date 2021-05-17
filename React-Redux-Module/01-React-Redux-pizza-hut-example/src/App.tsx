import React from 'react';
import './App.css';
import PizzaHut from "./components/PizzaHut";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Redux - Pizza Hut Example</a>
           </nav>
            <PizzaHut/>
        </React.Fragment>
    );
};
export default App;
