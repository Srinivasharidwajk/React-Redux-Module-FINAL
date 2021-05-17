import React from 'react';
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

interface IProps {}
interface IState {}

let ContactApp:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Contact App</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem cumque, earum eligendi est labore quisquam repudiandae sed sunt totam. At dolore maxime neque nesciunt, nobis odit quam reprehenderit tempore!</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-9">
                        <ContactList/>
                    </div>
                    <div className="col-md-3">
                        <ContactCard/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ContactApp;