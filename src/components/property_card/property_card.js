import React, {Component} from 'react'

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
  details: React.PropTypes.shape({
    agency: React.PropTypes.object.isRequired,
    mainImage: React.PropTypes.string.isRequired
  }),
  onClick: React.PropTypes.func
}