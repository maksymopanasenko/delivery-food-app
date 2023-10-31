import React from 'react';
import { Link } from 'react-router-dom';
import {restorants} from '../../assets/restorants';
import './ShopPanel.css';

function Tab({children, disabled}) {
    
    return (
        <button disabled={disabled.length > 0 ? true : false}>
            {children}
        </button>
    );
}

export default function ShopPanel({getIndex, filter, quantity}) {
    const active = restorants.find((item, index) => index === filter);
    
    return (
        <ul className="panel__list">
            {restorants.map((item, index) => (
                <li className={active === item ? "panel__item active" : "panel__item"} key={index} onClick={() => getIndex(index)}>
                    <Link to={`/${index + 1}`}><Tab disabled={quantity}>{item}</Tab></Link>
                </li>
            ))}
        </ul>
    );
}