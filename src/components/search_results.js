import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Results} from 'components'
import {
  selectResults,
  selectSaved
} from 'selectors'
import {addSavedResult} from 'actions'

export class SearchResults extends Component {

  render() {
    const {onClickOnResult, results} = this.props

    return (
      <div>
        <Results results={results} onClick={onClickOnResult} />
      </div>
    )
  }
}

SearchResults.propTypes = {
  results: React.PropTypes.object,
  saved: React.PropTypes.object,
  onClickOnResult: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    results: selectResults(state),
    saved: selectSaved(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClickOnResult: bindActionCreators(addSavedResult, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)

