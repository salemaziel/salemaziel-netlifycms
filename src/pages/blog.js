import React from "react"
import { Link, graphql } from "gatsby"

import OldBio from "../components/old-bio"
import Bio from "../components/bio"
import Layout from "../components/Layout"
import OldSEO from "../components/old-seo"
import Button from "../components/old-button"
import SearchPosts from "../components/searchPosts"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <OldSEO title="All posts" />
        <div id="main">
          <section className="three">
            <Container>
              <Row className="justify-content-center">
                <OldBio />
              </Row>
              <SearchPosts
                posts={posts}
                localSearchBlog={localSearchBlog}
                navigate={navigate}
                location={location}
              />
              <Link to="/">
                <Button marginTop="85px">Go Home</Button>
              </Link>
            </Container>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1080, quality: 100) {
                  base64
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
