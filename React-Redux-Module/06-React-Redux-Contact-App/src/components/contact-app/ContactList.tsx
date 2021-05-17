import React, {useEffect} from 'react';
import * as contactActions from '../../redux/contact-app/contact-app.actions';
import * as contactReducer from '../../redux/contact-app/contact-app.reducer';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../layout/Spinner";
import {IContact} from "../models/IContact";

interface IProps {}
interface IState {
    [contactReducer.contactFeatureKey] : contactReducer.ContactState
}

let ContactList:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let contactState:contactReducer.ContactState = useSelector((state : IState) => {
        return state[contactReducer.contactFeatureKey]
    });

    let {loading , contacts , error} = contactState;

    useEffect(() => {
        dispatch(contactActions.fetchContacts());
    }, []);

    let clickContact = (contact:IContact) => {
        dispatch(contactActions.selectContact(contact))
    };

    return (
        <React.Fragment>

            {
                loading ? <Spinner/> :
                    <React.Fragment>
                        <table className="table table-hover text-center table-striped">
                            <thead className="bg-secondary text-white">
                            <tr>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                contacts.map(contact => {
                                    return (
                                        <tr key={contact.login.uuid} onClick={clickContact.bind(this, contact)}>
                                            <td>{contact.login.uuid.substr(contact.login.uuid.length - 5)}</td>
                                            <td>{contact.name.title}. {contact.name.first} {contact.name.last}</td>
                                            <td>{contact.dob.age} yrs</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.location.city}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </React.Fragment>
            }
        </React.Fragment>
    );
};
export default ContactList;