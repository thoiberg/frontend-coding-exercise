import React, {Component} from 'react'
import _values from 'lodash/values'

import {Header, MouseOverButton, PropertyCard} from 'components'

export default class Results extends Component {
  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(id) {
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
      <div>
        <Header title={'Results'} />
        {this.renderResults()}
      </div>
    )
  }
}

Results.propTypes = {
  results: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
}