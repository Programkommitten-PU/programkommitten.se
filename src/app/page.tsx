'use client'
import EventCarousel from '@/components/EventCarousel/EventCarousel'
import { Header } from '@/components/Header/Header'
import styled from 'styled-components'

const Wrapper = styled.main`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow-x: hidden;
`

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <EventCarousel />
    </Wrapper>
  )
}

export default Home
