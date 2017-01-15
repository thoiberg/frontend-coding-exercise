import React from 'react'

const PropertyPriceBar = (props) => {
  const {price} = props

  return (
    <div>{price}</div>
  )
}

PropertyPriceBar.propTypes = {
  price: React.PropTypes.string.isRequired
}

export default PropertyPriceBar