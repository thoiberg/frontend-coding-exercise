import {selectResultById} from 'selectors'

export default (state, action) => {
  const resultProperty = selectResultById(state, action.payload.id)

  console.log('resultProperty', resultProperty)

  return {
    ...state,
    saved: {
      ...state.saved,
      ...resultProperty
    }
  }
}