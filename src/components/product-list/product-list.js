import React, { useState } from 'react';

import './product-list.css';

export default function ProductList({list, deleteItem}) {

    const [items, setItems] = useState(list);

    function deleteItemFromCart(i) {
        setItems(items => items.filter(item => item !== items[i]))
    };

    return (
        <ul className="list">
            {items.length !== 0 ?
             (items.map((item, index) => {
                return (
                    <li className="list__item" key={index}>
                        <div className="list__wrapper"> 
                            <span>{index + 1}.</span>
                            <img src={item.image} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                        <button className='list__btn' onClick={() => {
                            deleteItem(index);
                            deleteItemFromCart(index);
                        }}>Remove</button>
                    </li>
                );
            })) :
             (<p>Cart is empty</p>)}
        </ul>
    );
}