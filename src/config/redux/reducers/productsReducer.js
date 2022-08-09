const initialState = {
    products: {},
    count: 0,
    isLoading: false
}

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload.prodPerPage,
                count: action.payload.count,
                isLoading: false
            }
        case 'GET_PRODUCTS_ERROR':
            return {
                ...state,
                isLoading: true
            }

        default:
            return state
    }

}