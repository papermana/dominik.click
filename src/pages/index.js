import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider"
import Section from "../components/section"
import TextBlock from "../components/textBlock"

import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section className={styles.hero}>
      <h1>Dominik Rowicki.</h1>
      <TextBlock>A Front End Developer.</TextBlock>
      <TextBlock>Focused on simple UX and clean and functional code.</TextBlock>
    </Section>
    <Divider />
    <Section>
      <h2>❤︎s.</h2>
      <ul>
        <TextBlock as="li">Javascript. (Yes!)</TextBlock>
        <TextBlock as="li">React.</TextBlock>
        <TextBlock as="li">Functional programming.</TextBlock>
        <TextBlock as="li">Clojure.</TextBlock>
        <TextBlock as="li">
          Structure and Interpretation of Computer Programs.
        </TextBlock>
        <TextBlock as="li">Git.</TextBlock>
        <TextBlock as="li">Simplicity.</TextBlock>
      </ul>
    </Section>
    <Divider folded />
    <Section>
      <h2>Some useful things.</h2>
      <ul>
        <TextBlock as="li">
          <a href="https://github.com/papermana/react-modern-sticky">
            <code>react-modern-sticky</code>
          </a>{" "}
          &mdash; Lightweight sticky component for the modern web.
        </TextBlock>
      </ul>
    </Section>
    <Divider folded />
    <Section>
      <h2>Places you can find Dominik.</h2>
      <ul>
        <TextBlock as="li">
          <a href="https://github.com/papermana">GitHub</a>
        </TextBlock>
        <TextBlock as="li">
          <a href="https://linkedin.com/in/dominik-r">LinkedIn</a>
        </TextBlock>
      </ul>
    </Section>
  </Layout>
)

export default IndexPage
