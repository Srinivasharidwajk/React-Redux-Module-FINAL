export const INCR_PRODUCT_QTY:string = 'INCR_PRODUCT_QTY';
export const DECR_PRODUCT_QTY:string = 'DECR_PRODUCT_QTY';

export interface ActionType {
    type : string;
    payload : {
        id : string
    }
}

export const incrProductQty = (sno:string):ActionType => {
    return {
        type : INCR_PRODUCT_QTY,
        payload : {
            id : sno
        }
    }
};

export const decrProductQty = (sno : string):ActionType => {
    return {
        type : DECR_PRODUCT_QTY,
        payload : {
            id : sno
        }
    }
};