import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { FaGithubAlt, FaSlack, FaFacebookF, FaEnvelope } from 'react-icons/fa'
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql, Link } from 'gatsby'

const Overlay = styled.div`
  ${tw`pin absolute`};
  background-color: rgba(0, 0, 0, 0.5);
`

const Heading = styled.h1`
  ${tw`text-5xl mb-5`};
  color: ${props => props.theme.white};
`

const Paragraph = styled.p`
  ${tw`opacity-80 mb-12`};
  color: ${props => props.theme.white};
  padding-left: 11px;
  border-left: 2px solid ${props => props.theme.primary};
  max-width: 310px;
`

const Button = styled.div`
  a {
    text-decoration: none;
    ${tw`px-5 py-4 inline-flex items-center rounded-sm`};
    ${props => `
    background-color: ${
      props.slack ? '#E13F5E' : props.theme.button.primary.background
    };
    color: ${props.theme.button.primary.foreground};
    `};
    svg {
      margin-right: 10px;
    }
  }
`

const ShareEdge = styled.div`
  ${tw`flex-col items-center flex`};
  div {
    color: ${props => props.theme.white};
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-bottom: 24px;
    ${tw`opacity-75`}
  }

  a:first-of-type {
    margin-bottom: 14px;
  }
`

const ShareButton = styled.a`
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  font-size: 18px;
`

class Hero extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "bg.png" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => {
          // Set ImageData.
          const imageData = data.desktop.childImageSharp.fluid
          return (
            <BackgroundImage
              Tag="section"
              id="hero"
              className={
                'relative pt-32 pb-20 flex items-center z-0 sm:min-h-hero'
              }
              fluid={imageData}
              backgroundColor={`#040e18`}
            >
              <Overlay />
              <div className="container px-gutter mx-auto relative flex items-center">
                <div className="sm:w-1/2 w-4/5">
                  <Heading>The community of Golang Vietnam</Heading>
                  <Paragraph>
                    We are a group of members working in different places. We
                    love and use Go language for open source projects.
                    <br /> Let’s join us!
                  </Paragraph>

                  <div className="flex items-center sm:flex-row flex-wrap flex-column">
                    <Button className="sm:mb-0 mb-2 sm:mr-4">
                      <a href="https://github.com/golang-vietnam">
                        <FaGithubAlt /> Visit our Github
                      </a>
                    </Button>
                    <Button slack>
                      <Link to="/chat">
                        <FaSlack /> Join Us
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="sm:w-1/2  w-1/5 flex justify-end">
                  <ShareEdge>
                    <div>Like our page</div>
                    <ShareButton href="http://facebook.com/groups/golang.org.vn">
                      <FaFacebookF />
                    </ShareButton>
                    <ShareButton href="mailto:gophers@golang.org.vn">
                      <FaEnvelope />
                    </ShareButton>
                  </ShareEdge>
                </div>
              </div>
            </BackgroundImage>
          )
        }}
      />
    )
  }
}

export default Hero
