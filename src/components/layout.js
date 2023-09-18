import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./custom.css"
import "./mediaQuery.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div id = "main">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              maxWidth: 1250,
              height: '100%',
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built by
              {` `}
              <a href="https://www.angelotenorio.com">Angelo Tenorio</a>
            </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
