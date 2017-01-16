import React, {Component} from 'react'
import _values from 'lodash/values'

import Header from './header'
import MouseOverButton from './mouse_over_button'
import PropertyCard from './property_card'
import styles from './styles.scss'

export default class Results extends Component {
  handleOnClick = (id) => {
    const {onClick} = this.props

    return () => {
      onClick && onClick(id)
    }
  }

  renderResults() {
    const {results} = this.props

    return _values(results).map((result, index) => {
      const resultId = result.id
      return (
        <MouseOverButton key={resultId} onClick={this.handleOnClick(resultId)} >
          <PropertyCard
            details={result}
            key={resultId} />
        </MouseOverButton>
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