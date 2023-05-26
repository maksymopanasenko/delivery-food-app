import Card from '../card/card';

import './offer-board.css';

export default function Board({data}) {

    const arr = data.map(item => {
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