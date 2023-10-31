import './Card.css';

export default function Card({data, addProduct}) {

    return (
        <li className="board__card">
            <div className="board__link" onClick={() => addProduct(data)}>
                <div className="board__link-text">
                    <span className='board__label'>{data.time + ' min'}</span>
                    <span className='board__label star'>{data.assessment}</span>
                </div>
                <img src={data.image} alt='dish'/>
            </div>
            
            <div className="card__main-info">
                <h3 className="card__heading">{data.name}</h3>
                <span className="card__price">$ <span>{data.price}</span></span>
            </div>
        </li>
    );
}