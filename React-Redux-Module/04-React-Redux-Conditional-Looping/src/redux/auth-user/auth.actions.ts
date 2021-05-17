export const LOGIN_USER:string = 'LOGIN_USER';
export const LOGOUT_USER:string = 'LOGOUT_USER';

export interface ActionType {
    type : string
}

export const loginUser = ():ActionType => {
    return  {
        type : LOGIN_USER
    }
};

export const logOutUser = ():ActionType => {
    return  {
        type : LOGOUT_USER
    }
};