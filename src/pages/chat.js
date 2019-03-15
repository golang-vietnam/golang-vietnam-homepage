import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Container = styled.div`
  .chat__section {
    height: calc(100vh - 370px - 79px);
    min-height: 670px;
    background-color: #f8f8f8;
    position: relative;
    padding: 150px 0 300px 0;
  }

  .chat__iframe {
    width: 100%;
    min-height: 670px;
    height: calc(100vh - 76px - 79px);
    margin-top: -20px;
    overflow: hidden;
  }

  .chat__box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: -30px;
    width: 420px;
    height: 420px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.075);
  }

  @media only screen and (max-width: 600px) {
    .chat__box {
      margin-top: 0;
      width: 400px;
      box-shadow: none;
      background-color: ${props => props.theme.main.body};
    }

    .chat__section {
      min-height: 400px;
      background-color: ${props => props.theme.main.body};
    }
  }

  @media only screen and (max-width: 400px) {
    .chat__box {
      width: 100%;
    }
  }
`

const ChatPage = () => (
  <DefaultLayout>
    <SEO title="Slack chat" />
    <Container>
      <div className="chat__section">
        <div className="chat__box">
          <iframe
            title="slackin"
            className="chat__iframe"
            scrolling="no"
            src="https://golang.org.vn/"
            // src="http://slack.golang.org.vn/"
          />
        </div>
      </div>
    </Container>
  </DefaultLayout>
)

export default ChatPage
