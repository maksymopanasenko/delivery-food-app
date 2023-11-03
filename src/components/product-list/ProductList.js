import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './ProductList.css';
import { deleteFromCartAC } from '../../store/reducers/cart-reducer';

function EmptyCart() {
    return (
        <div className="empty">
            <p className='empty__text'>Your cart is empty...</p>
            <Link to='/shops' className='empty__btn'>Back to shop list</Link>
        </div>
    );
}

export default function ProductList({list}) {
    const dispatch = useDispatch();

    const deleteProduct = (id) => {
        dispatch(deleteFromCartAC(id));
    }

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
                                <button className='list__btn' onClick={() => deleteProduct(item.id)}>Remove</button>
                            </li>
                        );
                    })}
                </ul>) :
                (<EmptyCart/>)
            }
        </>
    );
}