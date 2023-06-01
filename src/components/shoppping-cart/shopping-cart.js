import ProductList from "../product-list/product-list";

export default function ShoppingCart({products}) {

    return (
        <main>
            <div className="container">
                <div className="cart__body">
                    <ProductList list={products}/>
                </div>
            </div>
        </main>
    );
}