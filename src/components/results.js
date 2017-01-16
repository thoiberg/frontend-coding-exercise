import React, {Component} from 'react'
import _values from 'lodash/values'

import Header from './header'
import PropertyCard from './property_card'
import styles from './styles.scss'

export default class Results extends Component {
  renderResults() {
    const {results, onClick} = this.props

    return _values(results).map((result, index) => {
      return (
        <PropertyCard
          details={result}
          key={result.id}
          onClick={onClick} />
      )
    })

  }

  render() {
    return (
      <div className={styles.results}>
        <Header title={'Results'} />
        {this.renderResults()}
      </div>
    )
  }
}

Results.propTypes = {
  results: React.PropTypes.object,
  onClick: React.PropTypes.func
}