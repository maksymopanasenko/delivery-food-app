import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartNextAC, deleteFromCartAC } from '../../store/reducers/cart-reducer';
import Counter from '../Counter/Counter';
import './ProductList.css';

function EmptyCart() {
    return (
        <div className="empty">
            <p className='empty__text'>Your cart is empty...</p>
            <Link to='/shops/1' className='empty__btn'>Back to shop list</Link>
        </div>
    );
}

export default function ProductList() {
    const productsInCart = useSelector(state => state.cart.cartProducts);
    const dispatch = useDispatch();

    const deleteProduct = (id) => {
        dispatch(deleteFromCartAC(id));
    }

    const increaseCount = (id) => {
        const newProd = productsInCart.find(item => item.id === id)
        dispatch(addToCartNextAC([newProd]))
    }

    // const decreaseCount = (id) => {
    //     const newProd = productsInCart.find(item => item.id === id)
    //     dispatch(addToCartNextAC([newProd]))
    // }

    return (
        <>
            {productsInCart.length ?
                (<ul className="list">
                    {productsInCart.map(({ instance, quantity }, index) => (
                        <li className="list__item" key={index}>
                            <div className="list__wrapper">
                                <span>{index + 1}.</span>
                                <img src={instance.image} alt={instance.name} />
                                <span>{instance.name}</span>
                            </div>
                            <Counter initialValue={quantity} item={instance} increaseCount={increaseCount} decreaseCount={deleteProduct} />
                            <button className='list__btn' onClick={() => deleteProduct(instance.id)}>Remove</button>
                        </li>
                    ))}
                </ul>) :
                (<EmptyCart />)
            }
        </>
    );
}