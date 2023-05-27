import React, { useEffect, useState } from 'react';

import Header from './components/header/header';
import Panel from './components/shop-panel/shop-panel';
import Board from './components/offer-board/offer-board';
// import data from './database/db.json';
// import getData from './services/service';

import './App.css';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('https://food-delivery-server-nk9c.onrender.com/');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Сталася помилка:', error);
    }
  }


  return (
    <div className='app'>
      <Header />
      <main>
        <div className="container">
          <div className="main__body">
            <Panel />
            <>
              {data ? (
                <div>
                  <Board data={JSON.stringify(data, null, 2)}/>
                </div>) :
                (<p>Loading...</p>)}
            </>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
