import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopPanel.css';

function Restaurant({children, disabled}) {
    
    return (
        <button disabled={disabled.length > 0 ? true : false}>
            {children}
        </button>
    );
}

export default function Panel({getIndex, filter, quantity}) {
    const [items] = useState(['McDonalds', 'KFC', 'Subway', 'Taco Bell', 'Burger King']);
    const active = items.find((item, index) => index === filter);

    return (
        <ul className="panel__list">
            {items.map((item, index) => (
                <li className={active === item ? "panel__item active" : "panel__item"} key={index} onClick={() => getIndex(index)}>
                    <Link to={`/shop${index + 1}`}><Restaurant disabled={quantity}>{item}</Restaurant></Link>
                </li>
            ))}
        </ul>
    );
}