import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import Card from "./card"

const TagPage = ({ data, pageContext }) => (
  <Layout>
    <h2>{pageContext.tag}</h2>
    <p>
      There are <b>{data.allMdx.totalCount}</b> posts tagged with{" "}
      <b>{pageContext.tag}</b>.
    </p>
    {data.allMdx.nodes.map(post => (
      <Card post={post} key={post.id} />
    ))}
  </Layout>
)

export default TagPage

export const pageQuery = graphql`
  query TagPageQuery($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...BlogCard
      }
      totalCount
    }
  }
`
