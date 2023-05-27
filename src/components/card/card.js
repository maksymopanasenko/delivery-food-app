import './card.css';

export default function Card({data}) {

    return (
        <li className="board__card">
            <a href="http://localhost:3000/" className="board__link">
                <div className="board__link-text">
                    <span className='board__label'>{data.time + ' min'}</span>
                    <span className='board__label'>{data.assessment}</span>
                </div>
                <img src={data.image} alt='dish'/>
            </a>
            
            <div className="card__main-info">
                <h3 className="card__heading">{data.name}</h3>
                <span className="card__price">$ <span>{data.price}</span></span>
            </div>
        </li>
    );
}