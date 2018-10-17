import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './reducers'

 export default createStore(mainReducer,applyMiddleware(thunk))