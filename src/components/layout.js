import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import favicon16 from "../images/favicon-16.png"
import favicon32 from "../images/favicon-32.png"
import favicon64 from "../images/favicon-64.png"

import "./layout.css"

const Layout = ({ children, className }) => (
  <>
    <Helmet
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${favicon16}`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${favicon32}`,
        },
        { rel: "shortcut icon", type: "image/png", href: `${favicon64}` },
      ]}
    />
    <main className={className}>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Layout.defaultProps = {
  className: "",
}

export default Layout
