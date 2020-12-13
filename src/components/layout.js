import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SEO from "./seo";

const Layout = ({ children, location, pageTitle }) => {
  const isHomepage = location === process.env.GATSBY_ROOT_URL;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const title = data.site.siteMetadata.title;

  return (
    <>
      <SEO pageTitle={pageTitle}/>
      {!isHomepage &&
        <Header siteTitle={title}/>
      }
      {isHomepage &&
        <div className="layout__banner" role="banner">
          <h1 className="layout-banner__title">{title}</h1>
          <div>tech &#8226; méthodologie &#8226; retour d'expérience</div>
        </div>
      }
      <div className="layout__container">
        <main>{children}</main>
      </div>
      <footer>
        <span>© {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a></span>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
