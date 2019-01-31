import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from '@/components/Heading'
import tw from 'tailwind.macro'

const Container = styled.section`
  ${tw`py-20`};
`

class Jobs extends Component {
  render() {
    return (
      <Container id="jobs">
        <div className="container px-gutter mx-auto">
          <Heading>Jobs</Heading>
        </div>
      </Container>
    )
  }
}

export default Jobs
