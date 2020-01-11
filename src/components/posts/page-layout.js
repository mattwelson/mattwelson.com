import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import components from "../../utils/components"
import Card from "./card"

import Layout from "../layout"

export default function PageTemplate({
  data: { node, next, previous, first },
}) {
  console.log({ node, next, previous, first })
  return (
    <MDXProvider components={components}>
      <Layout>
        <h2>{node.frontmatter.title}</h2>
        <MDXRenderer>{node.body}</MDXRenderer>

        {node.frontmatter.tags.map((tag, i) => (
          <Link to={`/tags/${tag.toLowerCase()}`} key={tag}>
            {i === 0 ? "" : " | "} #{tag}
          </Link>
        ))}

        <h2>Read more:</h2>
        {previous && (
          <>
            <h3>Newer</h3>
            <Card post={previous} />
          </>
        )}
        {next && (
          <>
            <h3>Older</h3>
            <Card post={next} />
          </>
        )}
        {first.id !== node.id &&
          (!previous || first.id !== previous.id) &&
          (!next || first.id !== next.id) && (
            <>
              <h3>Most recent post</h3>
              <Card post={first} />
            </>
          )}
      </Layout>
    </MDXProvider>
  )
}

export const pageQuery = graphql`
  query blogPostQuery(
    $id: String
    $next: String
    $previous: String
    $first: String
  ) {
    node: mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        tags
        category
        description
      }
      id
      body
      timeToRead
    }
    next: mdx(id: { eq: $next }) {
      ...BlogCard
    }
    previous: mdx(id: { eq: $previous }) {
      ...BlogCard
    }
    first: mdx(id: { eq: $first }) {
      ...BlogCard
    }
  }
`
