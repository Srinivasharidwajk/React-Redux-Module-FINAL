import React from 'react';
import * as contactReducer from '../../redux/contact-app/contact-app.reducer';
import {useSelector} from "react-redux";
import './ContactCard.css';

interface IProps {}
interface IState {
    [contactReducer.contactFeatureKey] : contactReducer.ContactState
}

let ContactCard:React.FC<IProps> = () => {

    let contactState:contactReducer.ContactState = useSelector((state : IState) => {
        return state[contactReducer.contactFeatureKey]
    });

    let {selectedContact} = contactState;

    return (
        <React.Fragment>
            {
                Object.keys(selectedContact).length > 0 &&
                <div className="card sticky-top">
                    <div className="card-header bg-secondary text-white p-5">
                    </div>
                    <div className="card-body text-center">
                        <img src={selectedContact.picture.large} alt="" className="rounded-circle contact-img img-thumbnail"/>
                        <ul className="list-group">
                            <li className="list-group-item">
                                NAME : {selectedContact.name.first} {selectedContact.name.last}
                            </li>
                            <li className="list-group-item">
                                {selectedContact.email}
                            </li>
                            <li className="list-group-item">
                                AGE : {selectedContact.dob.age} yrs
                            </li>
                            <li className="list-group-item">
                                City : {selectedContact.location.city}
                            </li>
                            <li className="list-group-item">
                                State : {selectedContact.location.state}
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};
export default ContactCard;