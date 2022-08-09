import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {persistStore ,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'persist-key-jdj383839frjvn',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store =  createStore(persistedReducer, applyMiddleware(thunk, logger))

const persistor = persistStore(store)

export default store
export {persistor}