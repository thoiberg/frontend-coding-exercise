import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import {SearchResults} from 'components'

ReactDOM.render(
  <Provider store={store}>
    <SearchResults />
  </Provider>,
  document.getElementById('root')
)