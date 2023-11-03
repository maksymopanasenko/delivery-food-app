import { Routes, Route } from 'react-router-dom';
import Card from '../card/Card';

import './OfferBoard.css';
import Banner from '../banner/Banner';
import { useSelector } from 'react-redux';

function BoardList({array}) {
    return (
        <ul className="board__list">
            {array}
        </ul>
    );
}

export default function Board({data}) {
    const index = useSelector(state => state.shops.activeShopTab);

    const dataArray = data;
    
    const arr = dataArray[index]?.map(item => {
        const {id} = item;
        return <Card key={id} data={item} />
    });

    return (
        <div className="board">
            <Routes>
                <Route path='/' element={<Banner />}/>
                <Route path='/:id' element={<BoardList array={arr} />}/>
            </Routes>
        </div>
    );
}