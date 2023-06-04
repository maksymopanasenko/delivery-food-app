import { Link } from 'react-router-dom';
import './Product-list.css';

function EmptyCart() {
    return (
        <div className="empty">
            <p className='empty__text'>Your cart is empty...</p>
            <button className='empty__btn'> <Link to={'/'}>Back to shop list</Link> </button>
        </div>
    )
}

export default function ProductList({list, deleteItem}) {

    return (
        <>
            {list.length !== 0 ?
                (<ul className="list">
                    {list.map((item, index) => {
                        return (
                                <li className="list__item" key={index}>
                                    <div className="list__wrapper"> 
                                        <span>{index + 1}.</span>
                                        <img src={item.image} alt={item.name} />
                                        <span>{item.name}</span>
                                    </div>
                                    <button className='list__btn' onClick={() => deleteItem(index)}>Remove</button>
                                </li>
                        );
                    })}
                </ul>) :
                (<EmptyCart/>)
            }
        </>
    );
}