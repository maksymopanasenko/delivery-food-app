import { Link } from 'react-router-dom';

import img from '../../resources/icons/shopping-cart-white.png';
import './Header.css';
import { useSelector } from 'react-redux';

function Button({ children, text }) {
    return <button className='header__btn'>{text}{children}</button>
}

function Cart() {
    const productsInCart = useSelector(state => state.cart.cartProducts);

    return (
        <>
            <img src={img} alt='cart' className='cart'></img>
            {productsInCart.length ? <span className='cart__item'>+<span id='item'>{productsInCart.length}</span></span> : null}
        </>
    );
}

export default function Header() {
    const productsInCart = useSelector(state => state.cart.cartProducts);
    const index = useSelector(state => state.shops.activeShopTab);

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav>
                        <ul className='header__btns'>
                            <li className='header__item'>
                                <Link to={productsInCart ? `/shops/${index}` : '/shops'}>
                                    <Button text='Shops' />
                                </Link>
                            </li>
                            <li className='header__item'>
                                <Link to='/cart'>
                                    <Button text='Shopping cart'>
                                        <Cart />
                                    </Button>
                                </Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}