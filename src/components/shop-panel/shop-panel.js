import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shop-panel.css';

function Restaurant({children}) {

    return (
        <button>
            {children}
        </button>
    );
}

export default function Panel({getIndex}) {
    const [items, setItems] = useState(['McDonalds', 'KFC', 'Subway', 'Taco Bell', 'Burger King']);


    return (
        <ul className="panel__list">
            {items.map((item, index) => (
                <li className="panel__item" key={index} onClick={() => getIndex(index)}>
                    <Link to={`/shop${index + 1}`}><Restaurant >{item}</Restaurant></Link>
                </li>
            ))}
        </ul>
    );
}