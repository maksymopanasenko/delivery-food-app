import './total.css';

export default function Total({list}) {

    const countTotal = (array) => {
        return array.length !== 0 ? array.reduce((acc, curr) => acc + curr.price, 0).toFixed(2) : 0
    }

    return (
        <div className="total">
            <p className="total__price">
                Total cost: <span className="total__sum">{countTotal(list) +' $'}</span>
            </p>
            <h3 className='total__title'>Method of payment</h3>
            <form>
                <div className='total__radio'>
                    <div>
                        <input type="radio" name="payment" id='card' value='card' required/>
                        <label htmlFor="card">Credit card</label>
                    </div>
                    <div>
                        <input type="radio" name="payment" id='cash' value='cash' required/>
                        <label htmlFor="cash">Cash</label>
                    </div>
                    <div>
                        <input type="radio" name="payment" id='paypal' value='paypal' required/>
                        <label htmlFor="paypal">Paypal</label>
                    </div>
                </div>
                <button className='total__btn'>Make an order</button>
            </form>
        </div>
    );
}