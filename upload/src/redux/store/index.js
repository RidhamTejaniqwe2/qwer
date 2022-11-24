import {applyMiddleware,legacy_createStore} from  'redux'
import persistStore from 'redux-persist/lib/persistStore'


import rootReducer from '../reducer'
const store=legacy_createStore(rootReducer)
const persiststore=persistStore(store)
export default {store,persiststore}