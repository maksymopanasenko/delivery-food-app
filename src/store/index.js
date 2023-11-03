import { combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import shopsReducer from "./reducers/shops-reducer";
import cartReducer from "./reducers/cart-reducer";

const rootReducer = combineReducers({
    shops: shopsReducer,
    cart: cartReducer,
});


export const store = legacy_createStore(rootReducer, composeWithDevTools())