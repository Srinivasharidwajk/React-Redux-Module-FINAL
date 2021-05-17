import * as userActions from './user.actions';
import {IUser} from "../../components/models/IUser";

export interface UserState {
    loading : boolean;
    users : IUser[];
    error : string;
}
let initialState : UserState = {
    loading : false,
    users : [] as IUser[],
    error : ''
};

export const reducer = (state = initialState , action:any):UserState => {
    switch(action.type) {
        case userActions.FETCH_USER_REQUEST:
            return {
                ...state,
                loading : true
            };
        case userActions.FETCH_USER_SUCCESS :
            return {
                ...state,
                loading : false,
                users : action.payload.users
            };
        case userActions.FETCH_USER_FAILURE :
            return {
                ...state,
                loading : false,
                error : action.payload.error
            };
        default: return state;
    }
};