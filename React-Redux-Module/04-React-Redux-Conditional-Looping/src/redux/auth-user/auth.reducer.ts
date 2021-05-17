import * as authActions from './auth.actions';

export interface AuthState {
    isLoggedIn : boolean;
}

let initialState:AuthState = {
    isLoggedIn : false
};

export const reducer = (state = initialState , action:authActions.ActionType):AuthState => {
    switch(action.type) {
        case authActions.LOGIN_USER:
            return {
                isLoggedIn : true
            };
        case authActions.LOGOUT_USER:
            return {
                isLoggedIn : false
            };
        default : return state;
    }
};