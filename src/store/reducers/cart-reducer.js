const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                cartProducts: state.cartProducts.filter(product => product.id !== action.payload)
            }
        default:
            return state;
    }
}

export const addToCartAC = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const deleteFromCartAC = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

export default cartReducer;