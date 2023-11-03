import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCartAC } from '../../store/reducers/cart-reducer';
import './ProductList.css';

function EmptyCart() {
    return (
        <div className="empty">
            <p className='empty__text'>Your cart is empty...</p>
            <Link to='/shops' className='empty__btn'>Back to shop list</Link>
        </div>
    );
}

export default function ProductList() {
    const productsInCart = useSelector(state => state.cart.cartProducts);
    const dispatch = useDispatch();

    const deleteProduct = (id) => {
        dispatch(deleteFromCartAC(id));
    }

    return (
        <>
            {productsInCart.length ?
                (<ul className="list">
                    {productsInCart.map((item, index) => {
                        return (
                            <li className="list__item" key={index}>
                                <div className="list__wrapper"> 
                                    <span>{index + 1}.</span>
                                    <img src={item.image} alt={item.name} />
                                    <span>{item.name}</span>
                                </div>
                                <button className='list__btn' onClick={() => deleteProduct(item.id)}>Remove</button>
                            </li>
                        );
                    })}
                </ul>) :
                (<EmptyCart/>)
            }
        </>
    );
}