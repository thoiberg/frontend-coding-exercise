import React, {Component} from 'react'

import AgencyBranding from './agency_branding'
import PropertyImage from './property_image'
import PropertyPriceBar from './property_price_bar'

export default class PropertyCard extends Component {
  render() {
    const {details: {agency, mainImage, price}} = this.props
    const {brandingColors, logo} = agency
    return (
      <div>
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
  onClick: React.PropTypes.func.isRequired
}