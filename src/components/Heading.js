import React from 'react'
import styled from 'styled-components'

const Styled = styled.h2`
  font-size: 40px;
  padding-bottom: 20px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 48px;
    height: 2px;
    background-color: ${props => props.theme.primary};
  }
`

const Heading = ({ children }) => <Styled>{children}</Styled>

export default Heading
