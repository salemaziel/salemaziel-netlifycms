import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import OldSEO from "../components/old-seo"
import SideBar from "../components/Sidebar/index"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <OldSEO title="404: Not Found" />
        <SideBar />
        <div id="main">
          <section>
            <div className="container">
              <section>
                <h1>Not Found</h1>
                <p>
                  You just hit a route that doesn&#39;t exist... the sadness.
                </p>
              </section>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
