import {GithubCred} from "../../components/github/cred/GithubCred";
import axios from 'axios';

export const SEARCH_PROFILE_REQUEST : string = 'SEARCH_PROFILE_REQUEST';
export const SEARCH_PROFILE_SUCCESS : string = 'SEARCH_PROFILE_SUCCESS';
export const SEARCH_PROFILE_FAILURE : string = 'SEARCH_PROFILE_FAILURE';

export const SEARCH_REPOS_REQUEST : string = 'SEARCH_REPOS_REQUEST';
export const SEARCH_REPOS_SUCCESS : string = 'SEARCH_REPOS_SUCCESS';
export const SEARCH_REPOS_FAILURE : string = 'SEARCH_REPOS_FAILURE';

export const searchProfile = (githubUsername : string) => {
    return async (dispatch:any) => {
        try {
            dispatch({type : SEARCH_PROFILE_REQUEST});
            let dataURL:string = `https://api.github.com/users/${githubUsername}?client_id=${GithubCred.clientID}&client_secret=${GithubCred.clientSecret}`
            let response = await axios.get(dataURL);
            dispatch({
                type : SEARCH_PROFILE_SUCCESS,
                payload : {
                    profile : response.data
                }
            });
        }
        catch (error) {
            console.error(error);
            dispatch({
                type : SEARCH_PROFILE_FAILURE,
                payload : {
                    error : error.message
                }
            });
        }
    };
};

export const searchRepos = (githubUsername : string) => {
    return async (dispatch:any) => {
        try {
            dispatch({type : SEARCH_REPOS_REQUEST});
            let dataURL:string = `https://api.github.com/users/${githubUsername}/repos?client_id=${GithubCred.clientID}&client_secret=${GithubCred.clientSecret}`
            let response = await axios.get(dataURL);
            dispatch({
                type : SEARCH_REPOS_SUCCESS,
                payload : {
                    repos : response.data
                }
            });
        }
        catch (error) {
            console.error(error);
            dispatch({
                type : SEARCH_REPOS_FAILURE,
                payload : {
                    error : error.message
                }
            });
        }
    };
};