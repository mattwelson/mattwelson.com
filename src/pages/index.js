import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/posts/card"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query queryAllPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          ...BlogCard
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <div className="profile">
        <h2>Web Developer</h2>
        <p>
          Hi, I'm Matt. I build front end websites that are fast, dynamic and
          easy to work with. I also love walking, running, taking photographs,
          Rocket League, and almost any useless skill I can learn.
        </p>
      </div>
      <div>
        {data.allMdx.nodes.map(node => (
          <Card key={node.id} post={node} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
