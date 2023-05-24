import { styled } from 'styled-components'
import PU from '@/drawables/PU.svg'

export const Wrapper = styled.div`
  position: absolute;
  display: flex;

  justify-content: space-between;
  margin-top: 10px;

  height: 50px;
  width: 100%;
`

export const PagesMenu = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-right: 20px;

  width: 541px;
  height: 37px;
`

export const PageItem = styled.p`
  font-weight: bold;
  font-size: 22px;
`

export const Logo = styled(PU)`
  height: 97px;
  width: 128px;

  margin-left: 20px;
`
