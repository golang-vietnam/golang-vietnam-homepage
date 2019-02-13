import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'
import { FaPlayCircle, FaCircleNotch } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

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
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  color: white;
  background-color: #000000;
`

const IframeWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80vw;
  transform: translate(-50%, -50%);

  > div {
    position: relative;
    padding-bottom: 56.25%; /*16:9*/
    height: 0;
    overflow: hidden;
    transition: all 0.4s ease;

    ${props =>
      props.loading
        ? `
    opacity: 0;
    transform: scale(0.8);      
    `
        : `
    opacity: 1;
    transform: scale(1);      
    `}
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Spin = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(359deg);
  }
`

const LoadingIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: 50%;
  animation: ${Spin} 2s infinite linear;
  width: 24px;
  height: 24px;
  border: 3px solid white;
  border-left-color: transparent;
  border-radius: 9999px;
  ${tw`flex items-center justify-center`}
  display: ${props => (props.loading ? 'block' : 'none')}
`

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 32px;
  top: 20px;
  right: 20px;
  position: absolute;
  color: white;
  padding: 0;
`

class VidePopup extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    this.ref.onload = () => {
      this.setState({ loading: false })
    }
    // TODO: should be an UI for error
    this.ref.onerror = () => {
      this.setState({ loading: false })
    }

    document.addEventListener('keydown', this.closeByEsc)
  }

  closeByEsc = e => {
    if (e.key === 'Escape') {
      this.close()
      document.removeEventListener('keydown', this.closeByEsc)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeByEsc)
  }

  close = () => {
    this.props.onClose()
  }

  render() {
    return (
      <PopupContainer>
        <IframeWrapper loading={this.state.loading}>
          <div>
            <iframe ref={node => (this.ref = node)} src={this.props.link} />
          </div>
        </IframeWrapper>
        <LoadingIcon loading={this.state.loading} />
        <CloseButton onClick={this.close} aria-label="close video popup">
          <MdClose />
        </CloseButton>
      </PopupContainer>
    )
  }
}

const Image = styled.div`
  padding-bottom: 62.83%;
  height: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.url});
`

class VideoCard extends Component {
  openVideo = () => {
    this.holder = document.createElement('div')
    document.body.appendChild(this.holder)
    ReactDOM.render(
      <VidePopup link={this.props.iframeLink} onClose={this.closeVideo} />,
      this.holder
    )
  }

  closeVideo = () => {
    document.body.removeChild(this.holder)
  }

  render() {
    const { image, title, date, iframeLink } = this.props
    return (
      <Container>
        <Preview onClick={this.openVideo}>
          <Image url={withPrefix(image)} />
          <PlayIcon
            role="button"
            aria-label="open video popup"
            aria-haspopup="true"
          >
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
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  iframeLink: PropTypes.string,
}

export default VideoCard
