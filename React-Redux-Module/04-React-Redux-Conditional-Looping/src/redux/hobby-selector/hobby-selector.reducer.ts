import * as hobbyActions from './hobby-selector.actions';

export interface HobbyState {
    eating : boolean;
    coding : boolean;
    sleeping : boolean;
}

let initialState:HobbyState = {
    eating : false,
    coding : false,
    sleeping : false
}

export const reducer = (state = initialState , action:hobbyActions.ActionType):HobbyState => {
    switch(action.type) {
        case hobbyActions.CHECK_EATING:
            return {
                ...state,
                eating : action.payload.option
            };
        case hobbyActions.CHECK_CODING:
            return {
                ...state,
                coding : action.payload.option
            };
        case hobbyActions.CHECK_SLEEPING:
            return {
                ...state,
                sleeping : action.payload.option
            };
        default: return state;
    }
};