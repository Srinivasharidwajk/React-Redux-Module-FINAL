import {combineReducers} from 'redux';
import * as messageReducer from './wish-message/wish-message.reducer';
import * as productReducer from './product-item/product-item.reducer';
import * as cartReducer from './shopping-cart/shopping-cart.reducer';

let rootReducer = combineReducers({
    wishMessage : messageReducer.reducer,
    productItem : productReducer.reducer,
    shoppingCart : cartReducer.reducer
});
export default rootReducer;