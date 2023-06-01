import { Link } from 'react-router-dom';
import './header.css';

function Button({children, text}) {
    return <button className='header__btn'>{text}{children}</button>
}

function Cart() {
    return <span id='cart'></span>;
}

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul className='header__btns'>
                        <li className='header__item'><Link to='/'><Button text='Shop'/></Link></li>
                        <li className='header__item'><Link to='/cart'><Button text='Shopping cart'><Cart/></Button></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}