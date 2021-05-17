import * as userActions from './user.actions';
import {IUser} from "./user.actions";

export interface UserState {
    user : IUser;
}

let initialState:UserState = {
    user : {} as IUser
};

export const reducer = (state = initialState , action:userActions.ActionType):UserState => {
    switch (action.type) {
        case userActions.REGISTER_USER:
            return {
                ...state,
                user : action.payload.user
            };
        default : return state;
    }
};
