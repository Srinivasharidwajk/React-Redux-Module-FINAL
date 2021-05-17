import React, {useState} from 'react';
import * as authActions from '../redux/auth-user/auth.actions';
import * as authReducer from '../redux/auth-user/auth.reducer';
import {useDispatch , useSelector} from "react-redux";

interface IProps {}
interface IState {
    authUser : authReducer.AuthState
}

let AuthUser:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let authState:authReducer.AuthState = useSelector((state:IState) => {
        return state.authUser;
    });

    let {isLoggedIn} = authState;

    let login = () => {
       dispatch(authActions.loginUser());
    };

    let logOut = () => {
        dispatch(authActions.logOutUser());
    };

    return (
        <React.Fragment>
            <pre>{JSON.stringify(authState)}</pre>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    {
                                        authState.isLoggedIn ?
                                            <button onClick={logOut} className="btn btn-warning btn-sm">LogOut</button> :
                                            <button onClick={login} className="btn btn-success btn-sm">Login</button>
                                    }

                                    {
                                        authState.isLoggedIn ?
                                            <p className="h3">Welcome Naveen!</p> :
                                            <p className="h3">Welcome Guest User</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default AuthUser;