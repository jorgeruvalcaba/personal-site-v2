import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class Blog extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="My Uses" />
        <h2>Uses</h2>
        <h3>Editor + Terminal</h3>
        <ul>
          <li>Visual Studio Code</li>
          <li>iTerm2</li>
          <li>Nigh Owl Theme + Material Icon Theme</li>
          <li>Currently using Operator Mono font</li>
          <li>
            I'm using Chrome most of the time but sometimes Firefox Developer
          </li>
        </ul>
        <h3>Desktop</h3>
        <ul>
          <li>I use Notion as my second brain and also in my GTD workflow</li>
          <li>As communication tool I'm using Discord + Slack cocktail</li>
        </ul>
        <h3>Hardware</h3>
        <ul>
          <li>At home I have a Macbook Pro (Mid 2020) with 16 GB of RAM</li>
          <li>
            I use the Keychron K2 keyboard with red switches{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            (absolutely gorgeous)
          </li>
        </ul>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
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
  }
`
