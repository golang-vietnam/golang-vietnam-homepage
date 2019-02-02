import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from '@/components/Heading'
import tw from 'tailwind.macro'
import data from '@/data/jobs'
import { Card, CardExcerpt, Dot, PrimaryButton } from '@/shared/styled'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { lg } from '@/shared/responsive'
import ReactResizeDetector from 'react-resize-detector'

const itemPadding = 24
const itemWidth = 295

const Container = styled.section`
  ${tw`py-20`};
`

const JobCardContainer = styled.div`
  ${lg`margin-top: -185px;`}
  position: relative;
  z-index: 9;
`

const JobCard = styled(Card)`
  width: 295px;
  flex: 295px 0 0;
  padding: 32px;
  margin-bottom: 0;
  margin-left: 12px;
  margin-right: 12px;
  box-sizing: border-box;
  h3 {
    ${tw`text-3xl mb-4 capitalize`}
  }
`

const JobCardInfo = styled.div`
  ${tw`text-sm opacity-75`}
`

const Navigator = styled(PrimaryButton)`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 99999px;
  font-size: 30px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  ${tw`flex items-center justify-center absolute shadow`};
`

const Carousel = styled.div`
  ${props => `
  width: ${props.display * props.itemWidth +
    props.display * props.itemPadding}px;
  overflow: hidden;
  padding-bottom:5px;  
  padding-top:5px;  
`}
`

const CarouselWrapper = styled.div`
  ${props => `
  width: ${props.numOfItems * props.itemWidth +
    (props.numOfItems - 1) * props.itemPadding}px;
  display: flex;  
  transform: translate3d(${props.translate}px, 0 , 0);
  transition: transform 0.5s ease;
`}
`

class Jobs extends Component {
  state = {
    display: 2,
    items: data,
    current: 0,
    translate: 0,
  }

  next = () => {
    this.setState(prevState => {
      const current =
        (this.state.items.length + prevState.current + this.state.display) %
        this.state.items.length
      return {
        translate: -(current * itemWidth + itemPadding * current),
        current,
      }
    })
  }

  onResize = width => {
    if (width <= 567 && this.state.display === 2) {
      this.setState({ display: 1, translate: 0, current: 0 })
    } else if (this.state.display === 1) {
      this.setState({ display: 2, translate: 0, current: 0 })
    }
  }

  render() {
    return (
      <Container id="jobs">
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <div className="container px-gutter mx-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 w-full mb-16">
              <Heading>Jobs</Heading>
            </div>
            <JobCardContainer className="lg:w-3/4 w-full flex justify-between lg:mx-0 -mx-gutter">
              <Carousel
                display={this.state.display}
                itemPadding={itemPadding}
                itemWidth={itemWidth}
              >
                <CarouselWrapper
                  numOfItems={this.state.items.length}
                  itemWidth={itemWidth}
                  translate={this.state.translate}
                  itemPadding={itemPadding}
                >
                  {this.state.items.map(
                    ({
                      title,
                      desc,
                      from,
                      id,
                      location,
                      company,
                      toString,
                      type,
                    }) => (
                      <JobCard key={id}>
                        <h3>{title}</h3>
                        <JobCardInfo>
                          <div className="font-bold mb-3 mt-5">{company}</div>
                          <div className="flex items-center mb-2">
                            <span>{location}</span>
                            <Dot />
                            <span>{type}</span>
                          </div>
                          <div className="opacity-75 mb-4">{from} days ago</div>
                        </JobCardInfo>
                        <CardExcerpt>{desc}</CardExcerpt>
                      </JobCard>
                    )
                  )}
                </CarouselWrapper>
              </Carousel>

              <Navigator onClick={this.next}>
                <IoIosArrowRoundForward />
              </Navigator>
            </JobCardContainer>
          </div>
        </div>
      </Container>
    )
  }
}

export default Jobs
