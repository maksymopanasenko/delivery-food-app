import ProductList from "../product-list/product-list";
import Total from "../total/total";

import './shopping-cart.css';

export default function ShoppingCart({products, deleteItem}) {

    return (
        <main>
            <div className="container">
                <div className="cart__body">
                    <ProductList list={products} deleteItem={deleteItem}/>
                    <Total list={products}/>
                </div>
            </div>
        </main>
    );
}