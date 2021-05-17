import React from 'react';
import './App.css';
import WishMessage from "./components/WishMessage";
import ProductItem from "./components/ProductItem";
import ShoppingCart from "./components/ShoppingCart";

interface IProps {}
interface IState {}

let App:React.FC<IProps> = () => {
    return (
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Redux - Pizza Hut Example</a>
           </nav>
          {/*  <WishMessage/>*/}
        {/*  <ProductItem/>*/}
        <ShoppingCart/>
        </React.Fragment>
    );
};
export default App;
