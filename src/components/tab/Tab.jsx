import { useDispatch, useSelector } from 'react-redux';
import { updateActiveTabAC } from '../../store/reducers/shops-reducer';

function Tab({ children, id }) {
    const productsInCart = useSelector(state => state.cart.cartProducts);
    const dispatch = useDispatch();

    const getIndex = (id) => dispatch(updateActiveTabAC(id));

    return (
        <button disabled={productsInCart.length} onClick={() => getIndex(id)}>
            {children}
        </button>
    );
}

export default Tab;