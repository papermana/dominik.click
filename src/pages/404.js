import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider"
import Section from "../components/section"
import TextBlock from "../components/textBlock"

const NotFoundPage = () => (
  <Layout>
    <SEO />
    <Section>
      <h1>404.</h1>
      <TextBlock>There is nothing here.</TextBlock>
    </Section>
    <Divider />
  </Layout>
)

export default NotFoundPage
