import React from 'react';
import './App.css';
import ContactApp from "./components/contact-app/ContactApp";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Redux - Contact App</a>
           </nav>
            <ContactApp/>
        </React.Fragment>
    );
};
export default App;
