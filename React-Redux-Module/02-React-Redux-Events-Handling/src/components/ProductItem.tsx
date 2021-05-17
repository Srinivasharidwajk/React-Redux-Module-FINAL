import React from 'react';
import * as productActions from '../redux/product-item/product-item.actions';
import * as productReducer from '../redux/product-item/product-item.reducer';
import {useDispatch, useSelector} from "react-redux";

interface IProps {}
interface IState {
    productItem : productReducer.ProductState
}

let ProductItem:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    // read the data from Redux Store
    let productState:productReducer.ProductState = useSelector((state : IState) => {
        return state.productItem;
    });

    let incrQty = () => {
        dispatch(productActions.incrProductQty());
    };

    let decrQty = () => {
        dispatch(productActions.decrProductQty());
    };

    let {product} = productState;
    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Product Item</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorem dolorum eum iusto non omnis porro? Atque aut consequuntur earum harum modi nisi optio qui rem rerum soluta! Dicta, magni!</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*  <pre>{JSON.stringify(this.state)}</pre>*/}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped">
                                <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{product.sno}</td>
                                    <td>
                                        <img src={product.image} alt="" width="50" height="50"/>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <i className="fa fa-minus-circle mx-1" onClick={decrQty}/>
                                        {product.qty}
                                        <i className="fa fa-plus-circle mx-1" onClick={incrQty}/>
                                    </td>
                                    <td>{product.price * product.qty}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ProductItem;