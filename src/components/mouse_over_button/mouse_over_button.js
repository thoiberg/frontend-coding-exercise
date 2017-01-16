import React from 'react'

import styles from 'components/styles.scss'

const MouseOverButton = (props) => {
  const {onClick} = props

  return (
    <div className={styles.mouseOverButton} onClick={onClick} >
      <div className={styles.mouseOverChildren}>
        {props.children}
      </div>
      <div className={styles.mouseOverButtonText}>Click to add property</div>
    </div>
  )
}

MouseOverButton.propTypes = {
  children: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
}

export default MouseOverButton