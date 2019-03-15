import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import NewsCard from '@/components/NewsCard'
import Head from './shared/Head'

const Container = styled.section`
  ${tw`sm:pt-28 pt-24 pb-0`};
`
class News extends Component {
  render() {
    return (
      <Container id="news">
        <div className="container px-gutter mx-auto">
          {/* <Head title="News" link="/news" /> */}
          <Head title="News" />

          {this.props.data.slice(0, 3).map((news, i) => (
            <NewsCard {...news} key={i} />
          ))}
        </div>
      </Container>
    )
  }
}

export default News
