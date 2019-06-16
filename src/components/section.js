import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "./section.module.css"

const Section = ({ children, className }) => (
  <section className={cx(styles.wrapper, className)}>
    <div className={styles.content}>{children}</div>
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Section.defaultProps = {
  className: "",
}

export default Section
