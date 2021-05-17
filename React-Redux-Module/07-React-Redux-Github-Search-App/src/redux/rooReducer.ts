import {combineReducers} from 'redux';
import * as githubReducer from './github/github.reducer';

let rootReducer = combineReducers({
    [githubReducer.githubFeatureKey] : githubReducer.reducer
});
export default rootReducer;