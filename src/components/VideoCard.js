import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'
import { FaPlayCircle } from 'react-icons/fa'

const Container = styled.div`
  ${props => `
    color: ${props.theme.card.foreground};    
    background-color: ${props.theme.card.background};
    box-shadow: ${props.theme.card.boxShadow};
  `}
`

const Heading = styled.h4`
  ${tw`mb-3 text-base`};
  line-height: 1.62em;
`

const Date = styled.h6`
  font-weight: 400;
  ${tw`text-sm opacity-50`};
`

const Preview = styled.div`
  position: relative;
`

const PlayIcon = styled.div`
  ${tw`absolute pin flex items-center justify-center opacity-50`};
  color: ${props => props.theme.white};
  font-size: 48px;
`

const PopupContainer = styled.div`
  ${tw`fixed pin bg-black`};
  z-index: 9999999;
  color: white;
`

class VidePopup extends Component {
  componentDidMount() {
    this.ref.onload = () => {
      console.log('loaded')
    }
  }

  render() {
    return (
      <PopupContainer>
        <iframe ref={node => (this.ref = node)} src={this.props.link} />
        <iframe />
      </PopupContainer>
    )
  }
}

class VideoCard extends Component {
  openVideo = () => {
    this.holder = document.createElement('div')
    document.body.appendChild(this.holder)

    ReactDOM.render(<VidePopup link={this.props.iframeLink} />, this.holder)
  }
  render() {
    const { previewImage, title, date, iframeLink } = this.props
    return (
      <Container>
        <Preview onClick={this.openVideo}>
          <img src={withPrefix(previewImage)} alt={title} />
          <PlayIcon role="button">
            <FaPlayCircle />
          </PlayIcon>
        </Preview>
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
