import { useEffect } from 'react';
import ShopPanel from '../../components/shop-panel/ShopPanel';
import Board from '../../components/offer-board/OfferBoard';
import fetchProducts from '../../store/asyncActions/allData';
import { useDispatch } from 'react-redux';

import './MainPage.css';

export default function Main() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <main>
            <div className="container">
                <div className="main__body">
                    <ShopPanel />
                    <Board />
                </div>
            </div>
        </main>
    )
}