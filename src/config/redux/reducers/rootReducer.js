import { combineReducers } from 'redux'
import { cartsReducer } from './cartReducer'
import { productsReducer } from './productsReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    carts: cartsReducer
})

export default rootReducer