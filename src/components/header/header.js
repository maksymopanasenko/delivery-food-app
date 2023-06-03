import { Link } from 'react-router-dom';

import img from '../../resources/icons/shopping-cart-white.png';
import './header.css';

function Button({children, text}) {
    return <button className='header__btn'>{text}{children}</button>
}

function Cart({quantity}) {
    return (
        <>
            <img src={img} alt='cart' className='cart'></img>
            {quantity ? <span className='cart__item'>+<span id='item'>{quantity}</span></span> : null}
        </>
    );
}

export default function Header({quantity}) {
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul className='header__btns'>
                        <li className='header__item'><Link to='/'><Button text='Shops'/></Link></li>
                        <li className='header__item'><Link to='/cart'><Button text='Shopping cart'><Cart quantity={quantity}/></Button></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}