import {ADD_SAVED_RESULT} from './actions'

export function addSavedResult(id) {
  return {
    type: ADD_SAVED_RESULT,
    payload: {
      id
    }
  }
}