import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Dominik Rowicki.</h1>
    <p>A Front End Developer.</p>
    <p>Focused on simple UX and clean and functional code.</p>
    <hr />
    <h2>❤︎s:</h2>
    <ul>
      <li>Javascript. (Yes!)</li>
      <li>React.</li>
      <li>Functional programming.</li>
      <li>Clojure.</li>
      <li>Structure and Interpretation of Computer Programs.</li>
      <li>Git.</li>
      <li>Simplicity.</li>
    </ul>
    <hr />
    <h2>Some useful things:</h2>
    <ul>
      <li>
        <a href="https://github.com/papermana/react-modern-sticky">
          <code>react-modern-sticky</code>
        </a>{" "}
        &mdash; Lightweight sticky component for the modern web.
      </li>
    </ul>
  </Layout>
)

export default IndexPage
