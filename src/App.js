import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import MessageContainer from './containers/MessageContainer';
import Footer from './components/Footer';
import Product from './components/Product';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
function App() {
    return (
        <div>
            <Header></Header>
            <main id="mainContainer">
                <div className="container">
                    <ProductsContainer></ProductsContainer>
                    <MessageContainer></MessageContainer>
                    <CartContainer></CartContainer>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}



export default App;
