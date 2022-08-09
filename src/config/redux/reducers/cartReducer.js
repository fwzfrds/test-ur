const initialState = {
    carts: [],
    isLoading: false
}

export const cartsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CARTS_SUCCESS':
            return {
                ...state,
                carts: [...state.carts, action.payload],
                isLoading: false
            }

        default:
            return state
    }

}