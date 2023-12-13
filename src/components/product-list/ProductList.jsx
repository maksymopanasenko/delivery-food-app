import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductList.css';
import CartItem from '../CartItem/CartItem';

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

    return (
        <>
            {productsInCart.length ?
                (<ul className="list">
                    {productsInCart.map((product, index) => (
                        <CartItem key={index} product={product} order={index}/>
                    ))}
                </ul>) :
                (<EmptyCart />)
            }
        </>
    );
}