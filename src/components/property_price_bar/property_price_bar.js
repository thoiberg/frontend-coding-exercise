import React, {PropTypes} from 'react'

import styles from './property_price_bar.scss'

const PropertyPriceBar = (props) => {
  const {price} = props

  return (
    <div className={styles.propertyPriceBar}>{price}</div>
  )
}

PropertyPriceBar.propTypes = {
  price: PropTypes.string.isRequired
}

export default PropertyPriceBar