import * as githubActions from './github.actions';
import {IProfile} from "../../components/github/models/IProfile";
import {IRepository} from "../../components/github/models/IRepository";

export const githubFeatureKey : string = 'github';

export interface GithubState {
    loading : boolean;
    profile : IProfile;
    repos : IRepository[];
    error : string;
}
let initialState:GithubState = {
    loading : false,
    profile : {} as IProfile,
    repos : [] as IRepository[],
    error : ''
};

export const reducer = (state = initialState , action:any):GithubState => {
    switch(action.type) {
        // for search profile
        case githubActions.SEARCH_PROFILE_REQUEST:
            return {
                ...state,
                loading : true
            };
        case githubActions.SEARCH_PROFILE_SUCCESS:
            return {
                ...state,
                loading : false,
                profile : action.payload.profile
            };
        case githubActions.SEARCH_PROFILE_FAILURE:
            return {
                ...state,
                loading : false,
                error : action.payload.error
            };
        // for search Repos
        case githubActions.SEARCH_REPOS_REQUEST:
            return {
                ...state,
                loading : true
            };
        case githubActions.SEARCH_REPOS_SUCCESS:
            return {
                ...state,
                loading : false,
                repos : action.payload.repos
            };
        case githubActions.SEARCH_REPOS_FAILURE:
            return {
                ...state,
                loading : false,
                error : action.payload.error
            };
        default: return state;
    }
};








