import React, {PropTypes} from 'react'

import styles from './header.scss'

const Header = (props) => {
  const {title} = props

  return (
    <h1 className={styles.header}>
      {title}
    </h1>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header