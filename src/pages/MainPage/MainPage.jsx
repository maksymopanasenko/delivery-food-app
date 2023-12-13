import ShopPanel from '../../components/shop-panel/ShopPanel';
import Board from '../../components/offer-board/OfferBoard';
import './MainPage.css';
import Loading from '../../components/loading/Loading';
import { useSelector } from 'react-redux';

export default function Main() {    
    const products = useSelector(state => state.products.products);

    return (
        <div className="container">
            <div className="main__body">
                {
                    products.length > 0 ?
                        (
                            <>
                                <ShopPanel />
                                <Board />
                            </>
                        ) : (
                            <Loading />
                        )
                }
            </div>
        </div>
    )
}