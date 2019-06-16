import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "./divider.module.css"

const Divider = ({ folded }) => {
  const className = cx(styles.strip, folded && styles.isFolded)

  return (
    <div className={styles.divider}>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
    </div>
  )
}

Divider.propTypes = {
  folded: PropTypes.bool,
}

Divider.defaultProps = {
  folded: false,
}

export default Divider
