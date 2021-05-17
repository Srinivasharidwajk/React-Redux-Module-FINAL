import React, {useState} from 'react';
import * as userActions from '../redux/user/user.actions';
import {useDispatch} from "react-redux";

interface IUser{
    username : string;
    email : string;
    password : string;
    designation : string;
    about : string;
    terms : boolean;
}
interface IProps {}
interface IState {
    user : IUser
}

let Registration:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let [userState , setUserState] = useState<IState>({
        user : {
            username : '',
            password : '',
            email : '',
            designation : '',
            about : '',
            terms : false
        }
    });

    let updateInput = (event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setUserState({
            user : {
                ...userState.user,
                [event.target.name] : event.target.value
            }
        })
    };

    let updateTerms = (event : React.ChangeEvent<HTMLInputElement>) => {
        setUserState({
            user : {
                ...userState.user,
                terms : event.target.checked
            }
        })
    };

    let submitRegister = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(userActions.registerUser(userState.user));
    };

    let {user} = userState;
    return (
        <React.Fragment>
           {/*  <pre>{JSON.stringify(userState)}</pre>*/}
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-warning text-white">
                                    <p className="h4">Register Here</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form onSubmit={submitRegister}>
                                        <div className="form-group">
                                            <input
                                                name="username"
                                                value={user.username}
                                                onChange={updateInput}
                                                type="text" className="form-control" placeholder="Username"/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input
                                                name="password"
                                                value={user.password}
                                                onChange={updateInput}
                                                type="password" className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input
                                                name="email"
                                                value={user.email}
                                                onChange={updateInput}
                                                type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <select
                                                name="designation"
                                                value={user.designation}
                                                onChange={updateInput}
                                                className="form-control">
                                                <option value="">Select Designation</option>
                                                <option value="Software Engineer">Software Engineer</option>
                                                <option value="Tech Lead">Tech Lead</option>
                                                <option value="Project Manager">Project Manager</option>
                                            </select>
                                        </div>
                                        <div className="form-group mt-2">
                                            <textarea
                                                name="about"
                                                value={user.about}
                                                onChange={updateInput}
                                                rows={3} className="form-control" placeholder="About Yourself"/>
                                        </div>
                                        <div className="form-check mt-2">
                                            <input
                                                onChange={updateTerms}
                                                type="checkbox" className="form-check-inline"/> Accept Terms
                                        </div>
                                        <div className="form-group mt-2">
                                            <input type="submit" className="btn btn-warning btn-sm" value="Register"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default Registration;