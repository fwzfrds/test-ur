import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../config/redux/actions/productsAction'

const useFetch = ({ from, to }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (dispatch) {
            dispatch(getProducts(from, to))
        }
    }, [dispatch, from, to])
}

export default useFetch