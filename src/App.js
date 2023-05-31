import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header';

import './App.css';
import Main from './components/main-page/main-page';

function App() {

  return (
    <div className='app'>
      <Header />
       <Routes>
         <Route path='*' element={<Main/>}/>
         <Route path='/cart' element={<p>Nothing</p>}/>
       </Routes>
    </div>
  );
}

export default App;
