import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Results, SavedProperties} from 'components'
import {
  selectResults,
  selectSaved
} from 'selectors'
import {addSavedResult} from 'actions'
import styles from './search_results.scss'

export class SearchResults extends Component {

  render() {
    const {
      onClickOnResult,
      results,
      saved
    } = this.props

    return (
      <div className={styles.container}>
        <Results results={results} onClick={onClickOnResult} />
        <SavedProperties savedProperties={saved} />
      </div>
    )
  }
}

SearchResults.propTypes = {
  results: PropTypes.object,
  saved: PropTypes.object,
  onClickOnResult: PropTypes.func
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

