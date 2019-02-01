import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'

const Container = styled.div`
  ${props => `
        background-color: ${props.theme.card.background};
        box-shadow: ${props.theme.card.boxShadow};
        color: ${props.theme.card.foreground};    
    `};
`

const Heading = styled.h4`
  ${tw`mb-3 text-base`};
  line-height: 1.62em;
`

const Date = styled.h6`
  font-weight: 400;
  ${tw`text-sm opacity-50`};
`

class VideoCard extends Component {
  render() {
    const { previewImage, title, date, iframeLink } = this.props
    return (
      <Container>
        <img src={withPrefix(previewImage)} alt={title} />
        <div className="p-6">
          <Heading>{title}</Heading>
          <Date>{date}</Date>
        </div>
      </Container>
    )
  }
}

VideoCard.propTypes = {
  previewImage: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  iframeLink: PropTypes.string,
}

export default VideoCard
