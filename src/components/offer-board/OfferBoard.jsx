import { Routes, Route } from 'react-router-dom';
import Card from '../card/Card';
import { useSelector } from 'react-redux';
import './OfferBoard.css';

function BoardList({children}) {
    return (
        <ul className="board__list">
            {children}
        </ul>
    );
}

export default function Board() {
    const shopId = useSelector(state => state.shops.activeShopTab);
    const products = useSelector(state => state.products.products);

    const productCards = products[shopId - 1]?.map(item => {
        const {id} = item;
        return <Card key={id} data={item} />
    });

    return (
        <div className="board">
            <Routes>
                <Route path='/:id' element={<BoardList>{productCards}</BoardList>}/>
            </Routes>
        </div>
    );
}