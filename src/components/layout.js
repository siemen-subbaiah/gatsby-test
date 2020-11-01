import React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"
import "./layout.css"
import Footer from "./reusable/Footer"
import NavBar from "./reusable/NavBar"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
