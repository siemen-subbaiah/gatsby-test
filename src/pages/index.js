import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/reusable/HeroSection"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import InfoBlock from "../components/InfoBlock"
import DualInfoBlock from "../components/DualInfoBlock"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="example.com"
      heroclass="hero-background"
    />
    <InfoBlock heading="About us" />
    <DualInfoBlock heading="Our team" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
