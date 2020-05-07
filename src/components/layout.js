import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log("data: ", data)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
