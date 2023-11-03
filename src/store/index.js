import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import shopsReducer from "./reducers/shops-reducer";
import cartReducer from "./reducers/cart-reducer";
import thunk from "redux-thunk";
import productsReducer from "./reducers/products-reducer";

const rootReducer = combineReducers({
    shops: shopsReducer,
    cart: cartReducer,
    products: productsReducer,
});


export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))