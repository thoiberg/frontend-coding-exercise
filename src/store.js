import {createStore} from 'redux'
import initialData from './data.json'
import rootReducer from 'reducers'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

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

export default createStore(rootReducer, formatInitialState(), composeWithDevTools())
