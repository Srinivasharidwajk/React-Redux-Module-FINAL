import * as pizzaActions from './pizza-hut.actions';

export interface PizzaState {
    count : number;
}

let initialState:PizzaState = {
    count : 100
};

export const reducer = (state = initialState , action:pizzaActions.ActionType):PizzaState => {
    switch(action.type) {
        case pizzaActions.BUY_PIZZA:
            return {
              count : (state.count - 1 > 0) ? state.count - 1 : 1
            };
        default : return state;
    }
};