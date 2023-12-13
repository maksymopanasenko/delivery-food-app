const ADD_FIRST_PRODUCT = "ADD_FIRST_PRODUCT";
const ADD_NEXT_PRODUCT = "ADD_NEXT_PRODUCT";
const REMOVE_ONE_UNIT = "REMOVE_ONE_UNIT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIRST_PRODUCT:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload]
            }
        case ADD_NEXT_PRODUCT:
            const { instance } = action.payload;
            const fill = state.cartProducts.find(product => product.instance.id === instance.id);

            if (!fill) {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, action.payload]
                }
            }

            const filteredProduct = state.cartProducts.map(product => {
                if (product.instance.id === instance.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            });

            return {
                ...state,
                cartProducts: filteredProduct
            }
        case REMOVE_ONE_UNIT:
            const product = state.cartProducts.find(product => product.instance.id === action.payload.instance.id);

            if (!product) {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, action.payload]
                }
            }

            const filteredProductDecr = state.cartProducts.map(product => {
                if (product.instance.id === action.payload.instance.id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                } else {
                    return product;
                }
            });

            return {
                ...state,
                cartProducts: filteredProductDecr
            }
        case DELETE_PRODUCT:
            const targetId = action.payload;
            let encounteredIds = {};
            const filteredProducts = state.cartProducts.filter(product => {
                if (product.instance.id === targetId && !encounteredIds[targetId]) {
                    encounteredIds[targetId] = true;
                    return false;
                }
                return true;
            });

            return {
                ...state,
                cartProducts: filteredProducts
            };
        default:
            return state;
    }
}

export const addToCartFirstAC = (products) => {
    return {
        type: ADD_FIRST_PRODUCT,
        payload: products
    }
}

export const addToCartNextAC = (product) => {
    return {
        type: ADD_NEXT_PRODUCT,
        payload: product
    }
}

export const decreaseQuantityAC = (product) => {
    return {
        type: REMOVE_ONE_UNIT,
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