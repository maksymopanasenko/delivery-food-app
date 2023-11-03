const FETCH_PRODUCTS = "FETCH_PRODUCTS";

const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }
}

export const fetchProductsAC = (products) => {
    return {
        type: FETCH_PRODUCTS,
        payload: products
    }
}

export default productsReducer;