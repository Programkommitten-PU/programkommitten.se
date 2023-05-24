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
  gap: 37px;

  margin-right: 20px;

  white-space: nowrap;

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
  flex: none;

  margin-left: 20px;
`
