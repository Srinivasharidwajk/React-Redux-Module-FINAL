import React, {useState} from 'react';
import {IProfile} from "./github/models/IProfile";
import {IRepository} from "./github/models/IRepository";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import * as githubActions from '../redux/github/github.actions';
import * as githubReducer from '../redux/github/github.reducer';
import {useDispatch, useSelector} from "react-redux";

interface IProps {}
interface IState {
    githubUsername : string;
}
export interface ReduxState{
    github : githubReducer.GithubState
}

let GithubProfileSearchApp:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let [state , setState] = useState<IState>({
        githubUsername : '',
    });

    // fetch the data from Redux Store
    let githubState:githubReducer.GithubState = useSelector((state : ReduxState) => {
        return state.github;
    });

    let {loading , profile , repos , error} = githubState;

    let updateInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            githubUsername : event.target.value
        });
    };

    let submitSearch = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // search for profile & Repos
        searchProfile(state.githubUsername);
        searchRepos(state.githubUsername);
    };

    let searchProfile = (githubUsername:string) => {
        // dispatch action
        dispatch(githubActions.searchProfile(githubUsername));
    };

    let searchRepos = (githubUsername:string) => {
        // dispatch action
        dispatch(githubActions.searchRepos(githubUsername));
    };

    return (
        <React.Fragment>
           {/* <pre>{JSON.stringify(state)}</pre>*/}
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Github Profile Search</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolore incidunt magni odit, quia sapiente velit vero voluptatibus. Ab aut, cupiditate distinctio dolorem eos fugit ipsum non similique tempora vitae.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={submitSearch} className="row g-2 align-items-center">
                            <div className="col-auto">
                                <input
                                    value={state.githubUsername}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="github Username"/>
                            </div>
                            <div className="col-auto">
                                <input type="submit" className="btn btn-success btn-sm" value="Search"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        <GithubProfile/>
                    </div>
                </div>
            </section>
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        <GithubRepos/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default GithubProfileSearchApp;