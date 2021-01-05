import React, { Component } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  FaGithubAlt,
  FaDiscord,
  FaFacebookF,
  FaEnvelope
} from 'react-icons/fa';
import BackgroundImage from 'gatsby-background-image';
import { StaticQuery, graphql } from 'gatsby';

const Overlay = styled.div`
  ${tw`inset-0 absolute`};
  background-color: rgba(0, 0, 0, 0.5);
`;

const Heading = styled.h1`
  ${tw`text-5xl mb-5 font-bold text-white`};
`;

const Paragraph = styled.p`
  border-left: 2px solid;
  max-width: 310px;
  ${tw`opacity-80 mb-12 text-white pl-3 border-primary`};
`;

const Button = styled.div`
  a {
    ${tw`px-5 py-4 inline-flex items-center rounded-sm text-white no-underline`};
    ${props => (props.discord ? `background-color: #7289DA` : tw`bg-primary`)};
    svg {
      margin-right: 10px;
    }
  }
`;

const ShareEdge = styled.div`
  ${tw`flex-col items-center flex`};
  div {
    ${tw`text-white mb-6 opacity-75`}
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  a:first-of-type {
    margin-bottom: 14px;
  }
`;

const ShareButton = styled.a`
  ${tw`bg-white text-gray-900 flex justify-center items-center rounded-full`}
  width: 32px;
  height: 32px;
  font-size: 18px;
`;

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
          const imageData = data.desktop.childImageSharp.fluid;
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

                  <div className="md:flex items-center md:flex-row flex-wrap flex-column">
                    <Button className="md:mb-0 mb-2 md:mr-4">
                      <a href="https://github.com/golang-vietnam">
                        <FaGithubAlt /> Visit our Github
                      </a>
                    </Button>
                    <Button discord>
                      <a href="https://discord.com/invite/sJfvxQW7cd">
                        <FaDiscord /> Join our Discord
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="sm:w-1/2  w-1/5 flex justify-end">
                  <ShareEdge>
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
          );
        }}
      />
    );
  }
}

export default Hero;
