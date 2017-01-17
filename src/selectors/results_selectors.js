export function selectResults(state) {
  const {properties} = state

  return properties.results
}

export function selectResultById(state, id) {
  if (state.results[id]) {
    return {[id]: state.results[id]}
  }
}