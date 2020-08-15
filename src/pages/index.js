import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Old syntax for cross-browser compatibility */
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  justify-content: space-around;

  .twitter {
    transition: transform 1s;

    &:hover {
      color: #00acee;
      cursor: pointer;
      transform: scale(1.5);
    }
  }

  .github {
    transition: transform 1s;

    &:hover {
      color: #24292e;
      cursor: pointer;
      transform: scale(1.5);
    }
  }

  .linkedin {
    transition: transform 1s;

    &:hover {
      color: #0e76a8;
      cursor: pointer;
      transform: scale(1.5);
    }
  }

  .codepen {
    transition: transform 1s;

    &:hover {
      color: black;
      cursor: pointer;
      transform: scale(1.5);
    }
  }

  .file {
    transition: transform 1s;

    :hover {
      color: red;
      cursor: pointer;
      transform: scale(1.5);
    }
  }
`

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Jorge Ruvalcaba"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <ImageWrapper>
          <img
            style={{ margin: 0, width: "275px" }}
            src="./jorgeBigHead.svg"
            alt="Jorge's Logo"
          />
        </ImageWrapper>
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
          <br />
          I'm Jorge and I build things for the web{" "}
        </h1>
        <p>
          I'm a software engineer based in Guadalajara, México specializing in
          building (and occasionally designing) exceptional, high-quality
          websites and applications.
        </p>
        <ImageWrapper>
          <FontAwesomeIcon
            className="twitter"
            onClick={() => window.open("https://twitter.com/jorgearuv")}
            icon={faTwitter}
            size="3x"
          />
          <FontAwesomeIcon
            className="github"
            onClick={() => window.open("https://github.com/jorgeruvalcaba/")}
            icon={faGithub}
            size="3x"
          />

          <FontAwesomeIcon
            className="linkedin"
            onClick={() =>
              window.open("https://www.linkedin.com/in/jorge-ruvalcaba/")
            }
            icon={faLinkedin}
            size="3x"
          />
          <FontAwesomeIcon
            className="codepen"
            onClick={() => window.open("https://codepen.io/jorgeruvalcaba/")}
            icon={faCodepen}
            size="3x"
          />
          <FontAwesomeIcon
            className="file"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1MKQlO8Qxp9bOJA69b9E5XA0ZZ3d6ZqQnoO1ybBEW8Fk/edit?usp=sharing"
              )
            }
            icon={faFile}
            size="3x"
          />
        </ImageWrapper>
        <Link to="/blog/">
          <Button marginTop="35px">Check out my blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
