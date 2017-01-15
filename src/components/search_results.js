import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {
  selectResults,
  selectSaved
} from 'selectors'
import {addSavedResult} from 'actions'

export class SearchResults extends Component {

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

SearchResults.propTypes = {
  results: React.PropTypes.object,
  saved: React.PropTypes.object,
  onClick: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    results: selectResults(state),
    saved: selectSaved(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: bindActionCreators(addSavedResult, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)

