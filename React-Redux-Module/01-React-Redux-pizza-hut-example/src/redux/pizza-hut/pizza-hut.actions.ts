export const BUY_PIZZA:string = 'BUY_PIZZA';

export interface ActionType {
    type : string;
}

export const buyPizza = ():ActionType => {
    return {
        type : BUY_PIZZA
    }
};