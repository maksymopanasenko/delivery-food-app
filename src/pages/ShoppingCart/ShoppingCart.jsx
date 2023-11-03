import ProductList from "../../components/product-list/ProductList";
import Total from "../../components/total/Total";

import './ShoppingCart.css';

export default function ShoppingCart({ products }) {

    return (
        <main>
            <div className="container">
                <div className="cart__body">
                    <ProductList list={products} />
                    {products.length > 0 && <Total list={products} />}
                </div>
            </div>
        </main>
    );
}