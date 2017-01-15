export function selectResults(state) {
  return state.results
}

export function selectResultById(state, id) {
  if (state.results[id]) {
    return {[id]: state.results[id]}
  }
}