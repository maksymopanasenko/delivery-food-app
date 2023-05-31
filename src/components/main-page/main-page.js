import { useState, useEffect } from 'react';
import Panel from '../shop-panel/shop-panel';
import Board from '../offer-board/offer-board';

import './main-page.css';

export default function Main() {

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
        console.error('Error happened:', error);
      }
    }

    return (
        <main>
            <div className="container">
            <div className="main__body">
                <Panel />
                <>
                    {data ? 
                        (<>
                            <Board data={JSON.stringify(data, null, 2)}/>
                        </>) :
                        (<p className='loading'>Loading...</p>)
                    }
                </>
            </div>
            </div>
        </main>
    )
}