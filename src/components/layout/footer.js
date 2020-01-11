import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
`

const FooterStyles = styled.footer`
  overflow: hidden;
  display: grid;
  justify-items: center;
  position: relative;
  top: -4rem;
  font-size: 0.8rem;
  max-width: 20rem;
  margin: 0 auto;

  p {
    text-align: center;
  }

  h4,
  h5 {
    margin: 1rem;
  }
`

const Link = ({ link }) => (
  <a href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
    {link.title}
  </a>
)

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      site {
        siteMetadata {
          links {
            title
            url
          }
        }
      }
    }
  `)
  return (
    <FooterStyles>
      <h4>@mattwelson</h4>

      <p>
        I love to write code, go on walks, take photos and learn new, sometimes
        weird, skills.
      </p>

      <p>See what I'm doing, or get in touch:</p>
      <FooterLinks>
        {data.site.siteMetadata.links.map(link => (
          <Link link={link} />
        ))}
      </FooterLinks>

      <p>Nice work today!</p>
    </FooterStyles>
  )
}

export default Footer
