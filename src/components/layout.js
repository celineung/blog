import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children, location }) => {
  const isHomepage = location === '/'
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {isHomepage &&
        <div className="layout__banner">
          <h1 className="layout-banner__title">Blog de Céline</h1>
          <div>tech &#8226; méthodologie &#8226; retour d'expérience</div>
        </div>
      }
      <div className="layout__container">
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
