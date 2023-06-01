import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header';

import './App.css';
import Main from './components/main-page/main-page';
import ShoppingCart from './components/shoppping-cart/shopping-cart';

function App() {
  const [products, setProducts] = useState([]);

  function addProduct(product) {
    setProducts(products => [...products, product]);
  }

  return (
    <div className='app'>
      <Header />
       <Routes>
         <Route path='*' element={<Main addProduct={addProduct}/>}/>
         <Route path='/cart' element={<ShoppingCart products={products}/>}/>
       </Routes>
    </div>
  );
}

export default App;
