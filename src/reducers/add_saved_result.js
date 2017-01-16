import {selectResultById} from 'selectors'

export default (state, action) => {
  const resultProperty = selectResultById(state, action.payload.id)

  return {
    ...state,
    saved: {
      ...state.saved,
      ...resultProperty
    }
  }
}