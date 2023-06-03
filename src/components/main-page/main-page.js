import { useState, useEffect } from 'react';
import Panel from '../shop-panel/shop-panel';
import Board from '../offer-board/offer-board';

import gif from '../../resources/gifs/food-truck.gif';

import './main-page.css';

export default function Main({addProduct}) {

    const [data, setData] = useState(null);
    const [index, setIndex] = useState(null);

    function Loading() {
        return (
            <div className='loading'>
                <img src={gif} alt="gif" />
                <p className='loading__text'>Loading...</p>
            </div>
        )
    }

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

    function getIndex(index) {
        setIndex(index);
    }

    return (
        <main>
            <div className="container">
                <div className="main__body">
                    <Panel getIndex={getIndex}/>
                    <>
                        {data ?
                            (<>
                                <Board data={JSON.stringify(data, null, 2)} index={index} addProduct={addProduct}/>
                            </>) :
                            (<Loading/>)
                        }
                    </>
                </div>
            </div>
        </main>
    )
}