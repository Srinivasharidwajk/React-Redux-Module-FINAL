import React from 'react';
import * as cartActions from '../redux/shopping-cart/shopping-cart.actions';
import * as cartReducer from '../redux/shopping-cart/shopping-cart.reducer';
import {useDispatch, useSelector} from "react-redux";

interface IProps {}
interface IState {
    shoppingCart : cartReducer.CartState
}

let ShoppingCart:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    let cartState:cartReducer.CartState = useSelector((state : IState) => {
        return state.shoppingCart;
    });

    let decrQty = (sno:string) => {
        dispatch(cartActions.decrProductQty(sno));
    };

    let incrQty = (sno:string) => {
        dispatch(cartActions.incrProductQty(sno));
    };

    let {products} = cartState;

    return (
        <React.Fragment>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Shopping Cart</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorem dolorum eum iusto non omnis porro? Atque aut consequuntur earum harum modi nisi optio qui rem rerum soluta! Dicta, magni!</p>
                        </div>
                    </div>
                </div>
            </section>
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
                                {
                                    products.map((product) => {
                                        return (
                                            <tr key={product.sno}>
                                                <td>{product.sno}</td>
                                                <td>
                                                    <img src={product.image} alt="" width="50" height="50"/>
                                                </td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <i className="fa fa-minus-circle mx-1" onClick={decrQty.bind(this,product.sno)}/>
                                                    {product.qty}
                                                    <i className="fa fa-plus-circle mx-1" onClick={incrQty.bind(this,product.sno)}/>
                                                </td>
                                                <td>{product.price * product.qty}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ShoppingCart;