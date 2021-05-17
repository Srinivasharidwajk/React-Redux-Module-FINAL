export const REGISTER_USER:string = 'REGISTER_USER';

export interface IUser{
    username : string;
    email : string;
    password : string;
    designation : string;
    about : string;
    terms : boolean;
}

export interface ActionType {
    type : string;
    payload : {
        user : IUser
    }
}

export const registerUser = (user:IUser):ActionType => {
    return {
        type : REGISTER_USER,
        payload : {
            user : user
        }
    }
};