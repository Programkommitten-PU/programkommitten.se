import { styled } from 'styled-components'
import Image from 'next/image'

// MOCK DATA
import primaryPath from '../../../mock/event/bubbelprovning_mock.png'
import sidePath from '../../../mock/event/kustskeppar_mock.png'

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 25px;

  gap: 28px;
`

export const ProgressBar = styled.div`
  width: 102px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`

export const ProgressButton = styled.div<{ $active?: boolean }>`
  width: 14px;
  height: 14px;
  flex: none;
  border-radius: 50%;

  border: 2px solid ${({ theme }) => theme.colors.secondary};

  ${({ $active, theme }) =>
    $active
      ? `background-color: ${theme.colors.secondary};`
      : `background-color: ${theme.colors.main};`}
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
`

export const CarouselWindows = styled.div`
  display: flex;
  height: 400px;
  width: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 70px;
`

export const PrimaryWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    border-radius: 5px;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25), inset 0px -120px 100px rgba(0, 0, 0, 0.75);
    position: absolute;
    top: 0;
    display: block;
    flex: none;
    height: 375px;
    width: 666px;
  }
`

export const PrimarySlide = styled(Image).attrs(() => ({
  src: primaryPath,
  alt: 'Poster of the sparkling wine event',
}))`
  & {
    height: 375px;
    width: 666px;

    border-radius: 5px;
  }
`

export const PrimaryTitle = styled.span`
  position: absolute;
  bottom: 36px;
  left: 10px;
  z-index: 1;
  font-weight: bold;
`

export const PrimarySub = styled.span`
  position: absolute;
  bottom: 14px;
  left: 10px;
  z-index: 1;
`

export const SideSlide = styled(Image).attrs(() => ({
  src: sidePath,
  alt: 'Poster of the sailing couse event ',
}))`
  height: 343px;
  width: 570px;
  flex: none;
  border-radius: 5px;

  background-blend-mode: darken;
  mix-blend-mode: normal;
  opacity: 0.75;
`
