/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const defaultLang = "fr";

function Seo({ description, lang = defaultLang, meta, pageTitle, image: metaImage, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );


  const metaDescription = description || site.siteMetadata.description;
  const titleSuffix = `| ${site.siteMetadata.title}`;
  const defaultTitle = `${pageTitle} ${titleSuffix}`;
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : `${site.siteMetadata.siteUrl}/images/coding_on_laptop.jpg`;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      titleTemplate={defaultTitle}
      link={
        canonical
          ? [
            {
              rel: "canonical",
              href: canonical,
            },
          ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        image
          ? [
            {
              property: "og:image",
              content: image,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
          ]
          : [
            {
              name: "twitter:card",
              content: "summary",
            },
          ]
      ).concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  canonical: PropTypes.string,
};

export default Seo;
