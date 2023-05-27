import Card from '../card/card';

import './offer-board.css';

export default function Board({data}) {

    const dataArray = JSON.parse(data);

    const arr = dataArray.map(item => {
        const {id, ...data} = item;
        return <Card key={id} data={data}/>
    });

    return (
        <div className="board">
            <ul className="board__list">
                {arr}
            </ul>
        </div>
    )
}