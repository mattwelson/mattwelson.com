import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'

const TagAndCount = ({ name, count }) => (
  <Link to={`/tags/${kebabCase(name)}/`}>
    <div className="tags has-addons">
      <span className="tag is-primary">{name}</span>
      <div className="tag">{count}</div>
    </div>
  </Link>
)

TagAndCount.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

export default TagAndCount
