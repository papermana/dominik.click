import React from "react"
import PropTypes from "prop-types"

import styles from "./textBlock.module.css"

const TextBlock = ({ as: Component, children }) => (
  <Component className={styles.textBlock}>{children}</Component>
)

TextBlock.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node.isRequired,
}

TextBlock.defaultProps = {
  as: "p",
}

export default TextBlock
