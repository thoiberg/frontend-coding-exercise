import React, {Component, PropTypes} from 'react'

import {AgencyBranding, PropertyImage, PropertyPriceBar} from 'components'
import styles from './property_card.scss'

export default class PropertyCard extends Component {
  render() {
    const {details: {agency, mainImage, price}} = this.props
    const {brandingColors, logo} = agency

    return (
      <div className={styles.propertyCard}>
        <AgencyBranding brandingColors={brandingColors} logoUrl={logo} />
        <PropertyImage mainImageUrl={mainImage} />
        <PropertyPriceBar price={price} />
      </div>
    )
  }
}

PropertyCard.propTypes = {
  details: PropTypes.shape({
    agency: PropTypes.object.isRequired,
    mainImage: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func
}