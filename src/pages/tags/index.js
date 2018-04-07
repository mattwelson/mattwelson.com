import React from 'react'
import Helmet from 'react-helmet'
import TagAndCount from '../../components/TagAndCount'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group: tags },
    site: { siteMetadata: { title } }
  }
}) => (
  <section className="section">
    <Helmet title={`Tags | ${title}`} />
    <div className="container">
      <div className="content">
        <h1 className="title is-size-2 is-bold-light">Tags</h1>
        <ul className="taglist">
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <TagAndCount name={tag.fieldValue} count={tag.totalCount} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
