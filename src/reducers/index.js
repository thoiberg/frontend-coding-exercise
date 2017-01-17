import {createReducer} from 'utils/redux'
import {combineReducers} from 'redux'

import {ADD_SAVED_RESULT} from 'actions'

const defaultState = {
  results: {},
  saved: {}
}

const propertiesReducer = createReducer(defaultState, {
  [ADD_SAVED_RESULT]: require('./add_saved_result').default
})

export default combineReducers({
  properties: propertiesReducer
})