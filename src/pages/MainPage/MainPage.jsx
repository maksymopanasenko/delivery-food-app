import { useState, useEffect } from 'react';
import ShopPanel from '../../components/shop-panel/ShopPanel';
import Board from '../../components/offer-board/OfferBoard';

import gif from '../../resources/gifs/food-truck.gif';

import './MainPage.css';

export default function Main({addProduct, quantity}) {
    const [allProducts, setAllProducts] = useState(null);
    const [index, setIndex] = useState(null);

    function Loading() {
        return (
            <div className='loading'>
                <img src={gif} alt="gif" />
                <p className='loading__text'>Loading...</p>
            </div>
        );
    }

    useEffect(() => {
        fetchData();
    }, []);
  
    async function fetchData() {
        try {
            const response = await fetch('https://food-delivery-server-nk9c.onrender.com/');
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error('Error happened: ', error);
        }
    }

    function getIndex(index) {
        setIndex(index);
    }

    return (
        <main>
            <div className="container">
                <div className="main__body">
                    {allProducts ? 
                        (
                            <>
                                <ShopPanel getIndex={getIndex} filter={index} quantity={quantity}/>
                                <Board data={JSON.stringify(allProducts, null, 2)} index={index} addProduct={addProduct}/>
                            </>
                        ) :
                        <Loading/>
                    }
                </div>
            </div>
        </main>
    )
}