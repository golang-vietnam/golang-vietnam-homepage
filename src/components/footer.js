import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.footer`
  background-color: ${props => props.theme.grey};
  padding: 30px 0;
`

const Footer = () => {
  return (
    <Container>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>© {new Date().getFullYear()} GolangVietnam</div>
          <div>
            <a href="mailto:gophers@golang.org.vn">gophers@golang.org.vn</a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
