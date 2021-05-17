export const CHECK_EATING :string = 'CHECK_EATING';
export const CHECK_CODING :string = 'CHECK_CODING';
export const CHECK_SLEEPING :string = 'CHECK_SLEEPING';

export interface ActionType {
    type : string;
    payload : {
        option : boolean
    }
}

export const checkEating = (option:boolean):ActionType => {
    return {
        type : CHECK_EATING,
        payload : {
            option : option
        }
    }
};

export const checkCoding = (option:boolean):ActionType => {
    return {
        type : CHECK_CODING,
        payload : {
            option : option
        }
    }
};

export const checkSleeping = (option:boolean):ActionType => {
    return {
        type : CHECK_SLEEPING,
        payload : {
            option : option
        }
    }
};