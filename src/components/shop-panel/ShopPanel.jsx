import React from 'react';
import { Link } from 'react-router-dom';
import { restorants } from '../../assets/restorants';
import './ShopPanel.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveTabAC } from '../../store/reducers/shops-reducer';

function Tab({ children, disabled }) {

    return (
        <button disabled={disabled.length > 0 ? true : false}>
            {children}
        </button>
    );
}

export default function ShopPanel() {
    const productsInCart = useSelector(state => state.cart.cartProducts);
    const activeTab = useSelector(state => state.shops.activeShopTab);
    const dispatch = useDispatch();
    const active = restorants.find((item, index) => index === activeTab);

    const getIndex = (index) => dispatch(updateActiveTabAC(index));

    return (
        <ul className="panel__list">
            {restorants.map((item, index) => (
                <li className={active === item ? "panel__item active" : "panel__item"} key={index} onClick={() => getIndex(index)}>
                    <Link to={`/shops/${index + 1}`}><Tab disabled={productsInCart}>{item}</Tab></Link>
                </li>
            ))}
        </ul>
    );
}