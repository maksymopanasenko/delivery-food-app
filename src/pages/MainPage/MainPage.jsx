import { useEffect } from 'react';
import ShopPanel from '../../components/shop-panel/ShopPanel';
import Board from '../../components/offer-board/OfferBoard';
import './MainPage.css';

export default function Main() {
    return (
        <div className="container">
            <div className="main__body">
                <ShopPanel />
                <Board />
            </div>
        </div>
    )
}