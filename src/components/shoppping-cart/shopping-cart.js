import ProductList from "../product-list/Product-list";
import Total from "../total/Total";

import './Shopping-cart.css';

export default function ShoppingCart({products, deleteItem}) {

    return (
        <main>
            <div className="container">
                <div className="cart__body">
                    <ProductList list={products} deleteItem={deleteItem}/>
                    {products.length > 0 ? <Total list={products}/> : null}
                </div>
            </div>
        </main>
    );
}