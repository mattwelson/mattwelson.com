import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const BlogCard = ({ post }) => (
  <div className="card card--blog">
    <header className="card-header">
      <Link
        className="has-text-primary card-header-title"
        to={post.fields.slug}
      >
        {post.frontmatter.title}
      </Link>
    </header>
    <div className="card-content">
      <div className="content">
        <p>{post.frontmatter.description}</p>
      </div>
    </div>
    <footer className="card-footer">
      <div className="card-footer-item">
        <small>{post.frontmatter.date}</small>
      </div>
      <Link className="has-text-primary card-footer-item" to={post.fields.slug}>
        Keep Reading →
      </Link>
    </footer>
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
