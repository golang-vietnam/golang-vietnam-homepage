import React, { Component } from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading';
import tw from 'twin.macro';
import { withPrefix } from 'gatsby';

const data = [
  {
    href: 'https://www.chotot.com/',
    image: 'chotot'
  },
  {
    href: 'https://dwarves.foundation',
    image: 'dwarves'
  },
  {
    href: 'https://missmp.eu/',
    image: 'missmoney'
  },
  {
    href: 'https://trustingsocial.com/',
    image: 'trustingsocial'
  },
  {
    href: 'https://webuild.community',
    image: 'webuild'
  },
  {
    href: 'https://gdgvietnam.com/',
    image: 'gdg'
  },
  {
    href: 'http://www.coderschool.vn/',
    image: 'coderschool'
  },
  {
    href: 'https://circo.co/',
    image: 'circo'
  }
];

const Container = styled.section`
  ${tw`sm:py-20 py-0`};
`;

const Image = styled.img`
  filter: gray;
  -webkit-filter: grayscale(1);
  transition: filter 0.3s ease;
  &:hover {
    filter: none;
    -webkit-filter: none;
  }
`;

const ImageLink = styled.a`
  ${tw`block leading-none shadow`};
  font-size: 0;
`;

class Supporter extends Component {
  render() {
    return (
      <Container id="supporters">
        <div className="container px-gutter mx-auto">
          <div className="mb-16">
            <Heading>Supporters</Heading>
          </div>

          <div className="flex flex-wrap -mx-gutter">
            {data.map(({ href, image }) => (
              <div
                className="sm:w-1/3 w-1/2 px-gutter mb-gutter mt-gutter"
                key={image}
              >
                <ImageLink
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt={image}
                    src={withPrefix(`/img/supporters/${image}_shrink.png`)}
                    srcSet={withPrefix(
                      `/img/supporters/${image}@2x_shrink.png 2x`
                    )}
                  />
                </ImageLink>
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default Supporter;
