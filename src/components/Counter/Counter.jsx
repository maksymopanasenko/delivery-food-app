import './Counter.css';


function Counter({ data, increaseCount, decreaseCount }) {
    return (
        <div className='counter'>
            <button className='counter__btn' onClick={increaseCount}>+</button>
            <span className='counter__result'>{data.length}</span>
            <button className='counter__btn' onClick={decreaseCount}>-</button>
        </div>
    );
}

export default Counter;