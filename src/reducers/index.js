import {createReducer} from 'utils/redux'

import {ADD_SAVED_RESULT} from 'actions'

const defaultState = {
  results: {},
  saved: {}
}

export default createReducer(defaultState, {
  [ADD_SAVED_RESULT]: require('./add_saved_result').default
})