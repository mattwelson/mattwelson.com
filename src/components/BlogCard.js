import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const BlogCard = ({ post }) => (
  <div
    className="content"
    style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
  >
    <p>
      <Link className="has-text-primary" to={post.fields.slug}>
        {post.frontmatter.title}
      </Link>
      <span> &bull; </span>
      <small>{post.frontmatter.date}</small>
    </p>
    <p>
      {post.frontmatter.description}
      <br />
      <br />
      <Link
        className="button is-small is-outlined is-primary"
        to={post.fields.slug}
      >
        Keep Reading →
      </Link>
    </p>
  </div>
)

BlogCard.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired,
    frontmatter: PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }).isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
}

export default BlogCard
