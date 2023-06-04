import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';

import './App.css';
import Main from './components/main-page/MainPage';
import ShoppingCart from './components/shoppping-cart/ShoppingCart';

function App() {
  const [products, setProducts] = useState([]);

  function addProduct(product) {
    setProducts(products => [...products, product]);
  }

  function deleteItem(i) {
    setProducts(products => products.filter(item => item !== products[i]))
  }

  return (
    <div className='app'>
      <Header quantity={products.length}/>
       <Routes>
         <Route path='*' element={<Main addProduct={addProduct} quantity={products}/>}/>
         <Route path='/cart' element={<ShoppingCart products={products} deleteItem={deleteItem}/>}/>
       </Routes>
    </div>
  );
}

export default App;
