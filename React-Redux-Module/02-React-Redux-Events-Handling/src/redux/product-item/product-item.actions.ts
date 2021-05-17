export const INCR_PRODUCT_QTY:string = 'INCR_PRODUCT_QTY';
export const DECR_PRODUCT_QTY:string = 'DECR_PRODUCT_QTY';

export interface ActionType {
    type : string
}

export const incrProductQty = ():ActionType => {
    return {
        type : INCR_PRODUCT_QTY
    }
};

export const decrProductQty = ():ActionType => {
    return {
        type : DECR_PRODUCT_QTY
    }
};