import React from 'react';
import { Link } from 'react-router-dom';
import { restorants } from '../../assets/restorants';
import { useSelector } from 'react-redux';
import Tab from '../tab/Tab';
import './ShopPanel.css';


export default function ShopPanel() {
    const activeTab = useSelector(state => state.shops.activeShopTab);

    const active = restorants.find(({ id }) => id === activeTab);

    return (
        <ul className="panel__list">
            {restorants.map(({ id, name }) => (
                <li className={active.id === id ? "panel__item active" : "panel__item"} key={id} >
                    <Link to={`/shops/${id}`}><Tab id={id}>{name}</Tab></Link>
                </li>
            ))}
        </ul>
    );
}