import React from 'react';
import * as githubReducer from '../redux/github/github.reducer';
import {useSelector} from "react-redux";
import {ReduxState} from "./GithubProfileSearchApp";
import Spinner from "./layout/Spinner";

interface IProps {

}
interface IState {}

let GithubProfileCard:React.FC<IProps> = ({}) => {
    // fetch the data from Redux Store
    let githubState:githubReducer.GithubState = useSelector((state : ReduxState) => {
        return state.github;
    });

    let {loading , profile} = githubState;
    return (
        <React.Fragment>
            {
                loading ? <Spinner/> :
                    <React.Fragment>
                        {
                            Object.keys(profile).length > 0 &&
                            <div className="card">
                                <img src={profile.avatar_url} alt="" className="img-fluid"/>
                                <div className="card-body">
                                    <p className="h3">{profile.name}</p>
                                    <small>{profile.bio}</small>
                                </div>
                            </div>
                        }
                    </React.Fragment>
            }
        </React.Fragment>
    );
};
export default GithubProfileCard;