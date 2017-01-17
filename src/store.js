import {createStore} from 'redux'
import initialState from './initial_state'
import rootReducer from 'reducers'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

export default createStore(rootReducer, initialState(), composeWithDevTools())
