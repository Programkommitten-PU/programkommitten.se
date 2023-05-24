import { styled } from 'styled-components'
import PU from '@/drawables/PU.svg'
import Link from 'next/link'

export const Wrapper = styled.div`
  position: absolute;
  display: flex;

  justify-content: space-between;
  align-items: center;
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

export const PageItem = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;

  font-weight: bold;
  font-size: 22px;
`

export const Logo = styled(PU)`
  height: 97px;
  width: 128px;
  flex: none;

  cursor: pointer;

  margin-top: 40px;
  margin-left: 20px;
`
