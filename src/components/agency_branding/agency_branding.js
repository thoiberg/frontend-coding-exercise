import React, {PropTypes} from 'react'

import styles from './agency_branding.scss'

const AgencyBranding = (props) => {
  const {brandingColors: {primary}, logoUrl} = props

  return (
    <div style={{backgroundColor: primary}} >
      <img src={logoUrl} className={styles.agencyLogo} />
    </div>
  )
}

AgencyBranding.propTypes = {
  brandingColors: PropTypes.shape({
    primary: PropTypes.string.isRequired
  }),
  logoUrl: PropTypes.string.isRequired
}

export default AgencyBranding