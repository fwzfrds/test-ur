import axios from 'axios'

export const getProducts = (from, to) => async (dispatch) => {
    try {

        dispatch({ type: 'GET_PRODUCTS_PENDING' })

        const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}`)

        const allProducts = (result.data.products)

        const prodPerPage = (allProducts).slice(from, to)

        const count = (allProducts).length

        dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: { prodPerPage, count } })

    } catch (error) {

        console.log(error)
        dispatch({ type: 'GET_PRODUCTS_ERROR' })

    }
}