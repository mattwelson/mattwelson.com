import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import BlogCard from '../components/BlogCard'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container">
          <div className="content">
            <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
            <ul className="taglist">
              {posts.map(({ node: post }) => (
                <BlogCard post={post} key={post.id} />
              ))}
            </ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            readMore
          }
        }
      }
    }
  }
`
