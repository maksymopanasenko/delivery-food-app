import React, { useState } from 'react';

import './product-list.css';

export default function ProductList({list}) {

    const [items] = useState(list);

    console.log(items)

    return (
        <ul className="list">
            {items.map((item, index) => {
                return (
                    <li className="list__item" key={index}>
                        <div className="list__wrapper"> 
                            <span>{index + 1}.</span>
                            <img src={item.image} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                        <button className='list__btn'>Remove</button>
                    </li>
                );
            })}
        </ul>
    )
}