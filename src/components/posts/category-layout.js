import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import Card from "./card"

const CategoryPage = ({ data, pageContext }) => (
  <Layout>
    <h2>{pageContext.category}</h2>
    <p>
      There are <b>{data.allMdx.totalCount}</b> posts in the{" "}
      <b>{pageContext.category}</b> category.
    </p>
    {data.allMdx.nodes.map(post => (
      <Card post={post} key={post.id} />
    ))}
  </Layout>
)

export default CategoryPage

export const pageQuery = graphql`
  query CategoryPageQuery($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...BlogCard
      }
      totalCount
    }
  }
`
