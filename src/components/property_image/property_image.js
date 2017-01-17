import React, {PropTypes} from 'react'

const PropertyImage = (props) => {
  const {mainImageUrl} = props

  return (
    <img src={mainImageUrl} />
  )
}

PropertyImage.propTypes = {
  mainImageUrl: PropTypes.string.isRequired
}

export default PropertyImage