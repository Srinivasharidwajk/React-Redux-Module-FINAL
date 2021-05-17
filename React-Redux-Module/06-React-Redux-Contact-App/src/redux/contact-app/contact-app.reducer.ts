import * as contactActions from './contact-app.actions';
import {IContact} from "../../components/models/IContact";

export const contactFeatureKey = 'contactApp';

export interface ContactState {
    loading : boolean;
    contacts : IContact[];
    selectedContact : IContact;
    error : string;
}

let initialState:ContactState = {
    loading : false,
    contacts : [] as IContact[],
    selectedContact : {} as IContact,
    error : ''
};

export const reducer = (state = initialState , action:any):ContactState => {
    switch (action.type) {
        case contactActions.FETCH_CONTACTS_REQUEST:
            return {
                ...state,
                loading : true
            };
        case contactActions.FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                loading : false,
                contacts : action.payload.contacts
            };
        case contactActions.FETCH_CONTACTS_FAILURE:
            return {
                ...state,
                loading : false,
                error : action.payload.error
            };
        case contactActions.SELECT_CONTACT:
            return {
                ...state,
                selectedContact : action.payload.contact
            }
        default: return state;
    }
};