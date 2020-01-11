import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Cover = styled.div`
background: ${({ theme }) => theme.colors.brand}
min-height: 12rem;
grid-row: 1;
grid-column: 1;
`

const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  padding: 1.45rem 1.0875rem;
`

const HeaderContainer = styled.div`
  display: grid;
`

const HeaderContent = styled.div`
  max-width: calc(800px - 4rem);
  width: 80vw;
  margin: 0 auto;
`

const BrandBar = styled.div`
  height: 0.5rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.brand};
  position: fixed;
  z-index: 100;
`

// TODO: add search, add dark mode toggle, add fixed nav on scroll up
const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Cover />
    <BrandBar />
    <HeaderStyles>
      <HeaderContent>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </HeaderContent>
    </HeaderStyles>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
