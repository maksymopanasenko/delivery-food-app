import { Routes, Route } from 'react-router-dom';
import Card from '../card/Card';

import './OfferBoard.css';
import Banner from '../banner/Banner';

function BoardList({array}) {
    return (
        <ul className="board__list">
            {array}
        </ul>
    );
}

export default function Board({data, index, addProduct}) {

    const dataArray = JSON.parse(data);
    
    const arr = dataArray[index]?.map(item => {
        const {id, ...data} = item;
        return <Card key={id} data={data} addProduct={addProduct}/>
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