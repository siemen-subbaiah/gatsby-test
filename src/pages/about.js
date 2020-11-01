import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/reusable/HeroSection"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import InfoBlock from "../components/InfoBlock"
import DualInfoBlock from "../components/DualInfoBlock"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About the team"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoBlock heading="A message from CEO" />
    <InfoBlock heading="Our Vision" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
