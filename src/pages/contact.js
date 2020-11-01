import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/reusable/HeroSection"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import InfoBlock from "../components/InfoBlock"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact us" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Get Amazing Websites"
      subtitle="example.com"
      heroclass="hero-background"
    />
    <InfoBlock heading="Contact us" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
