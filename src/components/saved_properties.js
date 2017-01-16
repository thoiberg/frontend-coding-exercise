import React, {Component} from 'react'
import _values from 'lodash/values'

import Header from './header'
import PropertyCard from './property_card'
import styles from './styles.scss'

export default class SavedProperties extends Component {

  renderSavedProperties() {
    const {savedProperties} = this.props

    return _values(savedProperties).map((savedProperty, index) => {
      return (
        <PropertyCard
          details={savedProperty}
          key={savedProperty.id} />
      )
    })
  }

  render() {
    return (
      <div className={styles.savedProperties}>
        <Header title="Saved Properties" />
        {this.renderSavedProperties()}
      </div>
    )
  }
}

SavedProperties.propTypes = {
  savedProperties: React.PropTypes.object.isRequired
}