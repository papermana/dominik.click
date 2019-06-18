import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider"
import Section from "../components/section"

import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section className={styles.hero}>
      <h1>Dominik Rowicki.</h1>
      <p>A Front End Developer.</p>
      <p>Focused on simple UX and clean and functional code.</p>
    </Section>
    <Divider />
    <Section>
      <h2>❤︎s.</h2>
      <ul>
        <li>Javascript. (Yes!)</li>
        <li>React.</li>
        <li>Functional programming.</li>
        <li>Clojure.</li>
        <li>Structure and Interpretation of Computer Programs.</li>
        <li>Git.</li>
        <li>Simplicity.</li>
      </ul>
    </Section>
    <Divider folded />
    <Section>
      <h2>Some useful things.</h2>
      <ul>
        <li>
          <a href="https://github.com/papermana/react-modern-sticky">
            <code>react-modern-sticky</code>
          </a>{" "}
          &mdash; Lightweight sticky component for the modern web.
        </li>
      </ul>
    </Section>
  </Layout>
)

export default IndexPage
