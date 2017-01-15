import React from 'react'

const PropertyImage = (props) => {
  const {mainImageUrl} = props

  return (
    <img src={mainImageUrl} />
  )
}

PropertyImage.propTypes = {
  mainImageUrl: React.PropTypes.string.isRequired
}

export default PropertyImage