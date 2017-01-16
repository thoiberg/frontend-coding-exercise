import React from 'react'

const Header = (props) => {
  const {title} = props

  return (
    <h1>{title}</h1>
  )
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Header