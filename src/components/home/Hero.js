import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { FaGithubAlt, FaSlack, FaFacebookF, FaEnvelope } from 'react-icons/fa'
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  ${tw`bg-cover bg-center pt-32 pb-20 flex items-center`};
  min-height: 100vh;
`

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

const Button = styled.a`
  text-decoration: none;
  ${tw`px-5 py-3 inline-flex items-center rounded`};
  ${props => `
    background-color: ${props.theme.button.primary.background};
    color: ${props.theme.button.primary.foreground};
    `};
  svg {
    margin-right: 10px;
  }
`

const ButtonSpace = styled.div`
  ${tw`w-4`}
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
                'relative pt-32 pb-20 flex items-center min-h-screen z-0'
              }
              fluid={imageData}
              backgroundColor={`#040e18`}
            >
              <Overlay />
              <div className="container px-gutter mx-auto relative flex items-center">
                <div className="w-1/2">
                  <Heading>The community of Golang Vietnam</Heading>
                  <Paragraph>
                    We are a group of members working in different places. We
                    love and use Go language for open source projects.
                    <br /> Let’s join us!
                  </Paragraph>

                  <div className="flex items-center">
                    <Button href="#">
                      <FaGithubAlt /> Visit our Github
                    </Button>
                    <ButtonSpace />
                    <Button href="#">
                      <FaSlack /> Visit our Slack
                    </Button>
                  </div>
                </div>
                <div className="w-1/2 flex justify-end">
                  <ShareEdge>
                    <div>Like our page</div>
                    <ShareButton href="#">
                      <FaFacebookF />
                    </ShareButton>
                    <ShareButton href="#">
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
