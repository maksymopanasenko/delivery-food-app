import { useSelector } from "react-redux";
import ProductList from "../../components/product-list/ProductList";
import Total from "../../components/total/Total";

import './ShoppingCart.css';

export default function ShoppingCart() {
    const productsInCart = useSelector(state => state.cart.cartProducts);

    return (
        <main>
            <div className="container">
                <div className="cart__body">
                    <ProductList />
                    {productsInCart.length > 0 && <Total />}
                </div>
            </div>
        </main>
    );
}