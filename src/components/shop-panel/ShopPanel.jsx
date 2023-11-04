import React from 'react';
import { Link } from 'react-router-dom';
import { restorants } from '../../assets/restorants';
import './ShopPanel.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveTabAC } from '../../store/reducers/shops-reducer';

function Tab({ children, disabled }) {
    return (
        <button disabled={!!disabled.length}>
            {children}
        </button>
    );
}

export default function ShopPanel() {
    const productsInCart = useSelector(state => state.cart.cartProducts);
    const activeTab = useSelector(state => state.shops.activeShopTab);
    const dispatch = useDispatch();

    const active = restorants.find(({id}) => id === activeTab);

    const getIndex = (id) => dispatch(updateActiveTabAC(id));

    return (
        <ul className="panel__list">
            {restorants.map(({id, name}) => (
                <li className={active.id === id ? "panel__item active" : "panel__item"} key={id} onClick={() => getIndex(id)}>
                    <Link to={`/shops/${id}`}><Tab disabled={productsInCart}>{name}</Tab></Link>
                </li>
            ))}
        </ul>
    );
}