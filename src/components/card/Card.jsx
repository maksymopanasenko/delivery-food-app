import './Card.css';
import Counter from '../Counter/Counter';
import { useDispatch } from 'react-redux';
import { addToCartAC } from '../../store/reducers/cart-reducer';
import { useState } from 'react';

export default function Card({ data }) {
    const [preCart, setPreCart] = useState([]);
    const dispatch = useDispatch();

    const increaseCount = () => {
        setPreCart(preCart => [...preCart, data]);
    }

    const decreaseCount = () => {
        if (!preCart.length) return;

        setPreCart([...preCart.slice(0, -1)]);
    }

    const addToCart = () => {
        dispatch(addToCartAC(preCart));
        setPreCart([]);
    }

    return (
        <li className="board__card">
            <div className="board__link" >
                <div className="board__link-text">
                    <span className='board__label'>{data.time + ' min'}</span>
                    <span className='board__label star'>{data.assessment}</span>
                </div>
                <img src={data.image} alt='dish' />
                <div className="card__controls">
                    <Counter data={preCart} increaseCount={increaseCount} decreaseCount={decreaseCount} />
                    <button className="card__add-btn" onClick={addToCart}>Add to cart</button>
                </div>
            </div>

            <div className="card__main-info">
                <h3 className="card__heading">{data.name}</h3>
                <span className="card__price">$ <span>{data.price}</span></span>
            </div>
        </li>
    );
}