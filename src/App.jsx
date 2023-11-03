import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/MainPage/MainPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

import './App.css';
import Layout from './pages/Layout/Layout';
import NoPage from './pages/NoPage/NoPage';
import StartPage from './pages/StartPage/StartPage';
import { useSelector } from 'react-redux';

function App() {
  const products = useSelector(state => state.cart.cartProducts);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path='/sichexpress' element={<StartPage />} />
          <Route path='/shops/*' element={<Main />} />
          <Route path='/cart' element={<ShoppingCart/>} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;