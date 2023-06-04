import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main-page/MainPage';
import ShoppingCart from './components/shoppping-cart/ShoppingCart';
import NoPage from './components/nopage/NoPage';

import './App.css';

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
              <Routes>                  
                  <Route path='/' element={<Header quantity={products.length}/>}>
                      <Route index element={<Main addProduct={addProduct} quantity={products}/>} />
                      <Route path='/del' element={<Main addProduct={addProduct} quantity={products}/>} />
                      <Route path='/*' element={<Main addProduct={addProduct} quantity={products}/>} />
                      <Route path='/cart' element={<ShoppingCart products={products} deleteItem={deleteItem}/>}/>

                      <Route path="*" element={<NoPage />} />
                  </Route>
              </Routes>
          </div>
  );
}

export default App;