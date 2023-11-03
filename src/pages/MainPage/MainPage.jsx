import { useEffect } from 'react';
import ShopPanel from '../../components/shop-panel/ShopPanel';
import Board from '../../components/offer-board/OfferBoard';
import gif from '../../resources/gifs/food-truck.gif';
import fetchProducts from '../../store/asyncActions/allData';
import { useDispatch, useSelector } from 'react-redux';

import './MainPage.css';

export default function Main({ quantity }) {
    const allProducts = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    function Loading() {
        return (
            <div className='loading'>
                <img src={gif} alt="gif" />
                <p className='loading__text'>Loading...</p>
            </div>
        );
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    console.log(allProducts);
    return (
        <main>
            <div className="container">
                <div className="main__body">
                    {allProducts ?
                        (
                            <>
                                <ShopPanel quantity={quantity} />
                                <Board data={allProducts} />
                            </>
                        ) :
                        <Loading />
                    }
                </div>
            </div>
        </main>
    )
}