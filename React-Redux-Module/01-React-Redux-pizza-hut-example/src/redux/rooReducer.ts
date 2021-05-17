import {combineReducers} from 'redux';
import * as pizzaReducer from './pizza-hut/pizza-hut.reducer';

let rootReducer = combineReducers({
    pizza : pizzaReducer.reducer
});
export default rootReducer;