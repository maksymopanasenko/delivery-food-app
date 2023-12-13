import { useDispatch, useSelector } from "react-redux";
import { addToCartNextAC, decreaseQuantityAC, deleteFromCartAC } from "../../store/reducers/cart-reducer";
import Counter from "../Counter/Counter";
import './CartItem.css';


const CartItem = ({ product, order }) => {
    const productsInCart = useSelector(state => state.cart.cartProducts);
    const dispatch = useDispatch();
    const { instance, quantity } = product;

    const deleteProduct = () => {
        dispatch(deleteFromCartAC(instance.id));
    }

    const increaseCount = () => {
        const newProd = productsInCart.find(item => item.instance.id === instance.id)

        dispatch(addToCartNextAC(newProd))
    }

    const decreaseCount = () => {
        const newProd = productsInCart.find(item => item.instance.id === instance.id)
        dispatch(decreaseQuantityAC(newProd))
    }

    return (
        <li className="list__item" key={order}>
            <div className="list__wrapper">
                <span>{order + 1}.</span>
                <img src={instance.image} alt={instance.name} />
                <span>{instance.name}</span>
            </div>
            <Counter initialValue={quantity} item={instance} increaseCount={increaseCount} decreaseCount={decreaseCount} inCart/>
            <button className='list__btn' onClick={deleteProduct}>Remove</button>
        </li>
    );
}

export default CartItem;