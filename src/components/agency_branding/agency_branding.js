import React from 'react'

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
  brandingColors: React.PropTypes.shape({
    primary: React.PropTypes.string.isRequired
  }),
  logoUrl: React.PropTypes.string.isRequired
}

export default AgencyBranding