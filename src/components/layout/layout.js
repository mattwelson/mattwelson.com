/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import theme from "../../utils/theme"

import Header from "./header"
import Footer from "./footer"

const PageBackground = styled.div`
  position: relative;
  z-index: 10;
  background: ${({ theme }) => theme.colors.backgroundDark};
  min-height: calc(100vh - 12rem);
`

const PageContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 90%;
  max-width: 800px;
  margin: 0 auto 2rem;
  overflow: hidden;
  position: relative;
  top: -6rem;
  padding: 2rem;
  box-shadow: 0 30px 50px 0 rgba(1, 1, 1, 0.15);
`

const Layout = ({ children }) => {
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
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageBackground>
        <PageContainer>
          <main>{children}</main>
        </PageContainer>
        <Footer></Footer>
      </PageBackground>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
