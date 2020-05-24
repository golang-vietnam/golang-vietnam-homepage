import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Styled = styled.h2`
  font-size: 40px;
  ${tw`relative font-bold pb-5`};
  &:after {
    ${tw`bg-primary absolute`}
    content: '';
    left: 0;
    bottom: 0;
    width: 48px;
    height: 2px;
  }
`;

const Heading = ({ children, className = '' }) => (
  <Styled className={className}>{children}</Styled>
);

export default Heading;
