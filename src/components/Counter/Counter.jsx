import { useEffect, useState } from 'react';
import './Counter.css';
import { useSelector } from 'react-redux';


function Counter({ initialValue, item, increaseCount, decreaseCount, inCart }) {
    const cart = useSelector(state => state.cart.cartProducts);
    const [count, setCount] = useState(initialValue);

    const handleIncrease = () => {
        setCount(count + 1);
        increaseCount(item?.id);
    }

    const handleDecrease = () => {
        if (count < 1) return;
        if (inCart && count <= 1) return;

        setCount(count - 1);
        decreaseCount(item?.id);
    };

    useEffect(() => {
        if (initialValue) return;
        setCount(0);
    }, [cart])

    return (
        <div className='counter'>
            <button className='counter__btn' onClick={handleIncrease}>+</button>
            <span className='counter__result'>{count}</span>
            <button className='counter__btn' onClick={handleDecrease}>-</button>
        </div>
    );
}

export default Counter;