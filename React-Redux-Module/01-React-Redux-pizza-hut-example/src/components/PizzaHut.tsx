import React from 'react';
import * as pizzaActions from '../redux/pizza-hut/pizza-hut.actions';
import * as pizzaReducer from '../redux/pizza-hut/pizza-hut.reducer';
import {useDispatch , useSelector} from 'react-redux';

interface IProps {}
interface IState {
    count : number;
}

let PizzaHut:React.FC<IProps> = () => {
    let dispatch = useDispatch();

    // get the pizza State from Redux Store
    let pizzaState:pizzaReducer.PizzaState = useSelector((state : {pizza : pizzaReducer.PizzaState}) => {
        return state.pizza;
    });

    let clickBuyPizza = () => {
        // dispatch an action to update / modify the state in Redux
        dispatch(pizzaActions.buyPizza());
    };

    return (
        <React.Fragment>
            <pre>{JSON.stringify(pizzaState)}</pre>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">PizzaHut</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ea facilis magnam modi quas sint totam ut? Accusantium corporis debitis delectus ipsum, maiores, praesentium provident quo repudiandae tempore ullam vero.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://b.zmtcdn.com/data/pictures/4/90384/ba50a5176f9b3abf84a4b734543474a2.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <p className="h2">Veg Pepparoni Pizza</p>
                            <p className="lead">Available Pizzas in Store</p>
                            <p className="h2">{pizzaState.count}</p>
                            <button onClick={clickBuyPizza} className="btn btn-success btn-sm">Buy Pizza</button>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at, beatae cupiditate dolor eaque ipsa laboriosam obcaecati pariatur quo repellendus, tempora voluptatibus? Commodi cum fugit ipsa iste optio pariatur suscipit?</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default PizzaHut;