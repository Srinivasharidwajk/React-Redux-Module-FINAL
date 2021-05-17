import * as messageActions from './wish-message.actions';

// state Type
export interface MessageState {
    message : string;
}

// initialState
let initialState:MessageState = {
    message : 'Hello'
}

// reducer
export const reducer = (state = initialState , action:messageActions.ActionType):MessageState => {
    switch(action.type) {
        case messageActions.GOOD_MORNING:
            return {
                message : 'Good Morning'
            };
        case messageActions.GOOD_AFTERNOON:
            return {
                message : 'Good Afternoon'
            };
        case messageActions.GOOD_EVENING:
            return {
                message : 'Good Evening'
            };
        default : return state;
    }
}


