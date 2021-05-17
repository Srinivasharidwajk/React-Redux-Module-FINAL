import axios from 'axios';
import {IContact} from "../../components/models/IContact";

export const FETCH_CONTACTS_REQUEST : string = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS : string = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE : string = 'FETCH_CONTACTS_FAILURE';

export const SELECT_CONTACT : string = 'SELECT_CONTACT';

export const fetchContacts = () => {
    return (dispatch: any) => {
        dispatch({type : FETCH_CONTACTS_REQUEST});
        let dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/d8f0a59bd6c54cf62635ad27ee04748d/raw/2757b410fe931edd91560bb0e389989284802998/Contacts.03.15.2021json`;
        axios.get(dataURL).then((response) => {
            dispatch({
                type : FETCH_CONTACTS_SUCCESS,
                payload : {
                    contacts : response.data
                }
            });
        }).catch((error) => {
            dispatch({
                type : FETCH_CONTACTS_FAILURE,
                payload : {
                    error : error.message
                }
            });
        });
    };
};

export const selectContact = (contact : IContact) => {
    return (dispatch:any) => {
        dispatch({
            type : SELECT_CONTACT,
            payload : {
                contact : contact
            }
        });
    };
};