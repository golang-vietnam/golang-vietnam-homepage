import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from '@/components/Heading'
import tw from 'tailwind.macro'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { withPrefix } from 'gatsby'

const data = [
  {
    href: 'https://www.chotot.com/',
    image: 'chotot',
  },
  {
    href: 'https://www.sendo.vn',
    image: 'sendo',
  },
  {
    href: 'https://trustingsocial.com/',
    image: 'trustingsocial',
  },
  {
    href: 'http://tiki.vn',
    image: 'tiki',
  },
  {
    href: 'https://www.designveloper.com/',
    image: 'designveloper',
  },
  {
    href: 'https://www.axonactive.com/',
    image: 'axon',
  },
  {
    href: 'https://dwarves.foundation',
    image: 'dwarves',
  },
  {
    href: 'https://missmp.eu/',
    image: 'missmoney',
  },
  {
    href: 'https://lozi.vn',
    image: 'lozi',
  },
  {
    href: 'https://webuild.community',
    image: 'webuild',
  },
  {
    href: 'https://gdgvietnam.com/',
    image: 'gdg',
  },
  {
    href: 'http://www.coderschool.vn/',
    image: 'coderschool',
  },
]

const Container = styled.section`
  ${tw`sm:py-20 py-0`};
`

const Image = styled.img`
  filter: gray;
  -webkit-filter: grayscale(1);
  transition: filter 0.3s ease;
  &:hover {
    filter: none;
    -webkit-filter: none;
  }
`

const ImageLink = styled.a`
  ${tw`block leading-none`};
  font-size: 0;
  box-shadow: ${props => props.theme.card.boxShadow};
`

class Sponsors extends Component {
  render() {
    return (
      <Container id="sponsors">
        <div className="container px-gutter mx-auto">
          <div className="mb-16">
            <Heading>Sponsors</Heading>
          </div>

          <div className="flex flex-wrap -mx-gutter">
            {data.map(({ href, image }) => (
              <div
                className="sm:w-1/3 w-1/2 px-gutter mb-gutter mt-gutter"
                key={image}
              >
                <ImageLink href={href} target="__blank">
                  <Image
                    alt={image}
                    src={withPrefix(`/img/sponsors/${image}_shrink.png`)}
                    srcSet={withPrefix(
                      `/img/sponsors/${image}@2x_shrink.png 2x`
                    )}
                  />
                </ImageLink>
              </div>
            ))}
          </div>
        </div>
      </Container>
    )
  }
}

export default Sponsors
