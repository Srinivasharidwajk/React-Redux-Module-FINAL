import React from 'react';
import {IUser} from "./models/IUser";
import axios from 'axios';

interface IProps {}
interface IState {
    users : IUser[]
}

class UserList extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            users : [] as IUser[]
        }
    }

    componentDidMount(): void {
        let dataURL : string = `https://jsonplaceholder.typicode.com/users`;
        axios.get(dataURL).then((response) => {
            this.setState({
                users : response.data
            });
        }).catch((error) => {
            console.error(error);
        });
    }


    render():React.ReactNode {
        let {users} = this.state;
        return (
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">User List</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque distinctio, enim excepturi fuga fugiat harum hic illo impedit in ipsum iure laudantium libero maxime minus necessitatibus nemo placeat quia!</p>
                            </div>
                        </div>
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
        );
    }
}
export default UserList;