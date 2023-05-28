'use client'
import {
  CarouselWindows,
  PrimaryWrapper,
  PrimarySlide,
  ProgressBar,
  ProgressButton,
  SideSlide,
  Title,
  Wrapper,
  PrimaryTitle,
  PrimarySub,
} from './EventCarousel.styled'

const EventCarousel = () => {
  return (
    <Wrapper>
      <Title>Kommande arrangemang</Title>

      <CarouselWindows>
        <SideSlide />
        <PrimaryWrapper>
          <PrimarySlide />
          <PrimaryTitle>Bubbelprovning</PrimaryTitle>
          <PrimarySub>Hyllan - 29e Mars</PrimarySub>
        </PrimaryWrapper>

        <SideSlide />
      </CarouselWindows>

      <ProgressBar>
        <ProgressButton />
        <ProgressButton $active />
        <ProgressButton />
      </ProgressBar>
    </Wrapper>
  )
}

export default EventCarousel
