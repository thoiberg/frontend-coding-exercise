import {createStore} from 'redux'
import initialData from './data.json'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

function reducer(state = [], action) {

  return state
}

function formatInitialState() {
  const data = {results: {}, saved: {}}

  initialData.results.forEach(datum => {
    data.results[datum.id] = datum
  })

  initialData.saved.forEach(datum => {
    data.saved[datum.id] = datum
  })

  return data
}

export default createStore(reducer, formatInitialState(), composeWithDevTools())
