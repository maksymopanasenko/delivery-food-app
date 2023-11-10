import './Card.css';
import Counter from '../Counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartFirstAC, addToCartNextAC } from '../../store/reducers/cart-reducer';
import { useState } from 'react';

export default function Card({ data }) {
    const [choosedItems, setChoosedItems] = useState(0);
    const cart = useSelector(state => state.cart.cartProducts);
    const dispatch = useDispatch();

    const increaseCount = () => {
        setChoosedItems(prev => prev + 1);
    }

    const decreaseCount = () => {
        setChoosedItems(prev => prev - 1);
    }

    const addToCart = () => {
        if (!choosedItems) return;
        
        const obj = {
            quantity: choosedItems,
            instance: data
        }
        if(cart.length) {
            dispatch(addToCartNextAC(obj))
        } else {
            dispatch(addToCartFirstAC(obj));
        }
        
        setChoosedItems(0);
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
                    <Counter initialValue={choosedItems} increaseCount={increaseCount} decreaseCount={decreaseCount} />
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