import { graphql } from "gatsby"
import React from "react"
import CourseCart from "../components/cart/CourseCart"
import DualInfoBlock from "../components/DualInfoBlock"
import InfoBlock from "../components/InfoBlock"
import Layout from "../components/layout"
import SEO from "../components/seo"

const services = ({ data }) => (
  <Layout>
    <SEO title="Services" />
    <InfoBlock heading="About our products" />
    <CourseCart mycourses={data.mycourses} />
    <DualInfoBlock heading="Our Motive" />
  </Layout>
)

export const query = graphql`
  {
    mycourses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default services
