import React, {PropTypes} from 'react'

import styles from './mouse_over_button.scss'

const MouseOverButton = (props) => {
  const {buttonText, onClick} = props

  return (
    <div className={styles.mouseOverButtonContainer} onClick={onClick} >
      <div className={styles.mouseOverButton}>
        <div className={styles.mouseOverChildren}>
          {props.children}
        </div>
        <button className={styles.mouseOverButtonText}>{buttonText}</button>
      </div>
    </div>
  )
}

MouseOverButton.defaultProps = {
  buttonText: 'Click here'
}

MouseOverButton.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MouseOverButton