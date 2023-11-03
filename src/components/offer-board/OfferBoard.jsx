import { Routes, Route } from 'react-router-dom';
import Card from '../card/Card';

import './OfferBoard.css';
import Banner from '../banner/Banner';
import { useSelector } from 'react-redux';

function BoardList({children}) {
    return (
        <ul className="board__list">
            {children}
        </ul>
    );
}

export default function Board() {
    const index = useSelector(state => state.shops.activeShopTab);
    const products = useSelector(state => state.products.products);
    
    const productCards = products[index]?.map(item => {
        const {id} = item;
        return <Card key={id} data={item} />
    });

    return (
        <div className="board">
            <Routes>
                <Route path='/' element={<Banner />}/>
                <Route path='/:id' element={<BoardList>{productCards}</BoardList>}/>
            </Routes>
        </div>
    );
}