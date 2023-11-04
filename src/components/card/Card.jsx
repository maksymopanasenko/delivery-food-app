import { useDispatch } from 'react-redux';
import './Card.css';
import { addToCartAC, deleteFromCartAC } from '../../store/reducers/cart-reducer';
import { useState } from 'react';

export default function Card({ data }) {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    
    const increaseCount = () => {
        setCount(count + 1);
        dispatch(addToCartAC(data));
    }
    
    const decreaseCount = () => {
        if (count === 0) return;
        setCount(count - 1);
        dispatch(deleteFromCartAC(data.id));
    }
    
    return (
        <li className="board__card">
            <div className="board__link" >
                <div className="board__link-text">
                    <span className='board__label'>{data.time + ' min'}</span>
                    <span className='board__label star'>{data.assessment}</span>
                </div>
                <img src={data.image} alt='dish' />
                <div className='board__link-controls'>
                    <button className='card__btn' onClick={increaseCount}>+</button>
                    <span className='card__counter'>{count}</span>
                    <button className='card__btn' onClick={decreaseCount}>-</button>
                </div>
            </div>

            <div className="card__main-info">
                <h3 className="card__heading">{data.name}</h3>
                <span className="card__price">$ <span>{data.price}</span></span>
            </div>
        </li>
    );
}