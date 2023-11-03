const UPDATE_ACTIVE_TAB = "UPDATE_ACTIVE_TAB";

const initialState = {
    activeShopTab: null
}

const shopsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_ACTIVE_TAB:
            return {
                ...state,
                activeShopTab: action.payload
            }
        default:
            return state;
    }
}

export const updateActiveTabAC = (tab) => {
    return {
        type: UPDATE_ACTIVE_TAB,
        payload: tab
    }
}

export default shopsReducer;