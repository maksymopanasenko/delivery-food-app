import { Routes, Route } from 'react-router-dom';
import Card from '../card/Card';
import cossack from '../../resources/img/cossack.png'

import './OfferBoard.css';

function Banner() {
    return (
        <div className='banner'>
            <h1 className='banner__title'>SichExpress</h1>
            <img src={cossack} alt="cossack" />
            <p className='banner__slogan'><em>"Mountains shiver as we deliver"</em></p>
        </div>
    );
}

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
                <Route path='/' element={<Banner/>}/>
                <Route path='/:id' element={<BoardList array={arr} />}/>
            </Routes>
        </div>
    );
}