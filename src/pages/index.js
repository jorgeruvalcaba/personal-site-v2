import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faCodepen,
  faDev,
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

  .icon {
    transition: transform 1s;

    &:hover {
      cursor: pointer;
      transform: scale(1.5);
    }

    &.twitter {
      &:hover {
        color: #00acee;
      }
    }

    &.github {
      &:hover {
        color: #24292e;
      }
    }

    &.dev {
      &:hover {
        color: black;
      }
    }

    &.linkedin {
      &:hover {
        color: #0e76a8;
      }
    }

    &.codepen {
      &:hover {
        color: black;
      }
    }

    &.file {
      &:hover {
        color: red;
      }
    }

    &.envelope {
      &:hover {
        color: orange;
      }
    }
  }
`
const HandWrapper = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
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
          <HandWrapper>
            <span className="hand" role="img" aria-label="wave">
              👋
            </span>
          </HandWrapper>
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
            className="icon twitter"
            onClick={() => window.open("https://twitter.com/jorgearuv")}
            icon={faTwitter}
            size="3x"
          />
          <FontAwesomeIcon
            className="icon github"
            onClick={() => window.open("https://github.com/jorgeruvalcaba/")}
            icon={faGithub}
            size="3x"
          />
          <FontAwesomeIcon
            className="icon dev"
            onClick={() => window.open("https://dev.to/jorgearuv")}
            icon={faDev}
            size="3x"
          />
          <FontAwesomeIcon
            className="icon linkedin"
            onClick={() =>
              window.open("https://www.linkedin.com/in/jorge-ruvalcaba/")
            }
            icon={faLinkedin}
            size="3x"
          />
          <FontAwesomeIcon
            className="icon codepen"
            onClick={() => window.open("https://codepen.io/jorgeruvalcaba/")}
            icon={faCodepen}
            size="3x"
          />
          <FontAwesomeIcon
            className="icon file"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1MKQlO8Qxp9bOJA69b9E5XA0ZZ3d6ZqQnoO1ybBEW8Fk/edit?usp=sharing"
              )
            }
            icon={faFile}
            size="3x"
          />
          <FontAwesomeIcon
            className="icon envelope"
            onClick={() =>
              (window.location = "mailto:jorgeruvalcabav@gmail.com")
            }
            icon={faEnvelope}
            size="3x"
          />
        </ImageWrapper>
        <LinkWrapper>
          <Link to="/blog/">
            <Button marginTop="35px">Blog</Button>
          </Link>
          <Link to="/uses/">
            <Button marginTop="35px">Uses</Button>
          </Link>
        </LinkWrapper>
      </Layout>
    )
  }
}

export default IndexPage
