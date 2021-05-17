import {combineReducers} from 'redux';
import * as contactReducer from './contact-app/contact-app.reducer';

let rootReducer = combineReducers({
    [contactReducer.contactFeatureKey] : contactReducer.reducer
});
export default rootReducer;