const ADD_FIRST_PRODUCT = "ADD_FIRST_PRODUCT";
const ADD_NEXT_PRODUCT = "ADD_NEXT_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIRST_PRODUCT:
            return {
                ...state,
                cartProducts:  [...state.cartProducts, action.payload]
            }
        case ADD_NEXT_PRODUCT:
            const {instance, quantity} = action.payload;
            const fil = state.cartProducts.find(product => product.instance.id === instance.id);
            if (!fil) {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, action.payload]
                }
            }

            const filteredProduct = state.cartProducts.map(product => {
                if (product.instance.id === instance.id) {
                    return {
                        ...product,
                        quantity: product.quantity + quantity
                    }
                } else {
                    return product;
                }
            });
            
            return {
                ...state,
                cartProducts: filteredProduct
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
    // console.log(products);
    return {
        type: ADD_FIRST_PRODUCT,
        payload: products
    }
}

export const addToCartNextAC = (products) => {
    return {
        type: ADD_NEXT_PRODUCT,
        payload: products
    }
}

export const deleteFromCartAC = (id) => {
    console.log(id);
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

export default cartReducer;