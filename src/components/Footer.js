import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { FaEnvelope } from 'react-icons/fa'

const Container = styled.footer`
  background-color: ${props => props.theme.grey};
  padding: 30px 0;

  a {
    color: ${props => props.theme.black};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Footer = () => {
  return (
    <Container>
      <div className="container mx-auto text-sm px-gutter">
        <div className="flex items-center justify-between -mx-gutter sm:flex-row flex-col-reverse">
          <div className="font-medium opacity-40 px-gutter">
            © {new Date().getFullYear()} GolangVietnam
          </div>
          <div className="px-gutter sm:mb-0 mb-5">
            <a
              className="opacity-80 flex items-center"
              href="mailto:gophers@golang.org.vn"
            >
              <FaEnvelope className="mr-2" /> <span>gophers@golang.org.vn</span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
