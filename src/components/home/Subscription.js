import React, { Component } from 'react'
import styled from 'styled-components'
import { SubHeading } from '@/shared/styled'
import tw from 'tailwind.macro'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { withPrefix } from 'gatsby'

const Container = styled.section`
  ${tw`pt-20`};
  padding-bottom: 200px;
`

const Wrapper = styled.div`
  max-width: 456px;
  margin: auto;
  text-align: center;
`

const Button = styled.button`
  padding: 12px 40px;
  display: inline-block;
  ${props => `
    background-color: ${props.theme.button.primary.background};
    color: ${props.theme.button.primary.foreground};
  `}
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  margin-bottom: 18px;
  ${props => `  
  background-color: ${props.theme.main.background};
  border: 1px solid ${props.theme.main.border};
  outline:none;
  &:focus{
    border-color: ${props.theme.main.primary};    
  }
  `}
  &:last-of-type {
    ${tw`mb-10`}
  }
`

class Subscription extends Component {
  state = {
    email: '',
    github: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <Container id="subscription">
        <div className="container px-gutter mx-auto">
          <Wrapper>
            <div className="mb-16 text-center">
              <SubHeading>
                Để đăng kí nhận thông tin tuyển dụng và sự kiện.
              </SubHeading>
            </div>

            <form onSubmit={this.handleSubmit}>
              <Input name="name" type="email" placeholder="Enter your email" />
              <Input
                name="github"
                type="text"
                placeholder="Enter your Github URL"
              />
              <Button type="submit">Submit</Button>
            </form>
          </Wrapper>

          <div className="flex flex-wrap -mx-gutter" />
        </div>
      </Container>
    )
  }
}

export default Subscription
