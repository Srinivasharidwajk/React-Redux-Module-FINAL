import React, {useEffect} from 'react';
import * as userActions from '../redux/users/user.actions';
import * as userReducer from '../redux/users/user.reduer';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "./layout/Spinner";

interface IProps {}
interface IState {
    userList : userReducer.UserState
}

let UserData:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let userState:userReducer.UserState = useSelector((state : IState) => {
        return state.userList;
    });

    let {loading , error , users} = userState;

    useEffect(() => {

    }, []);

    let clickGetUsers = () => {
        dispatch(userActions.fetchUsers());
    };

    return (
        <React.Fragment>
            {
                loading ? <Spinner/> :
                    <React.Fragment>
                        <section>
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col">
                                        <p className="h3 text-primary">User List</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque distinctio, enim excepturi fuga fugiat harum hic illo impedit in ipsum iure laudantium libero maxime minus necessitatibus nemo placeat quia!</p>
                                    </div>
                                </div>
                                <button onClick={clickGetUsers} className="btn btn-success btn-sm">Get Users</button>
                                <div className="row">
                                    <div className="col">
                                        <table className="table table-hover text-center table-striped">
                                            <thead className="bg-dark text-primary">
                                            <tr>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>Email</th>
                                                <th>City</th>
                                                <th>Website</th>
                                                <th>Company</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                users.length > 0 &&
                                                users.map((user) => {
                                                    return (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.address.city}</td>
                                                            <td>{user.website}</td>
                                                            <td>{user.company.name}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </React.Fragment>
            }
        </React.Fragment>
    );
};
export default UserData;