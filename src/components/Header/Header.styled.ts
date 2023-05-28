import { styled } from 'styled-components'
import PU from '@/drawables/PU.svg'
import Link from 'next/link'

export const Wrapper = styled.div`
  display: flex;

  left: 0;
  top: 0;

  justify-content: space-between;
  align-items: center;

  height: 130px;
  width: 100%;

  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);

  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
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

  margin-left: 20px;
`

export const Divider = styled.div`
  height: 3px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};
`
