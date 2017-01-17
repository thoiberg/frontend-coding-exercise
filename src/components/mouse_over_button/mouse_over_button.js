import React from 'react'

import styles from './mouse_over_button.scss'

const MouseOverButton = (props) => {
  const {onClick} = props

  return (
    <div className={styles.mouseOverButtonContainer} onClick={onClick} >
      <div className={styles.mouseOverButton}>
        <div className={styles.mouseOverChildren}>
          {props.children}
        </div>
        <div className={styles.mouseOverButtonText}>Click to add property</div>
      </div>
    </div>
  )
}

MouseOverButton.propTypes = {
  children: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
}

export default MouseOverButton