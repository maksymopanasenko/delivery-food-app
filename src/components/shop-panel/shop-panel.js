import { Link } from 'react-router-dom';
import './shop-panel.css';

function Restaurant({children}) {

    return (
        <button>
            {children}
        </button>
    );
}

export default function Panel() {
    return (
        <ul className="panel__list">
            <li className="panel__item"><Link to='/shop1'><Restaurant >McDonalds</Restaurant></Link></li>
            <li className="panel__item"><Link to='/shop2'><Restaurant >KFC</Restaurant></Link></li>
            <li className="panel__item"><Link to='/shop3'><Restaurant >Subway</Restaurant></Link></li>
            <li className="panel__item"><Link to='/shop4'><Restaurant >Taco Bell</Restaurant></Link></li>
            <li className="panel__item"><Link to='/shop5'><Restaurant >Burger King</Restaurant></Link></li>
        </ul>
    );
}