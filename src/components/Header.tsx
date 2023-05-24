'use client'
import { Logo, PageItem, PagesMenu, Wrapper } from './Header.styled'

export const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <PagesMenu>
        <PageItem>Om oss</PageItem>
        <PageItem>Arrangemang</PageItem>
        <PageItem>Kontakt</PageItem>
        <PageItem>Pateter</PageItem>
      </PagesMenu>
    </Wrapper>
  )
}
