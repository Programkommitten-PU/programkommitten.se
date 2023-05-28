'use client'
import Link from 'next/link'
import { Logo, PageItem, PagesMenu, Wrapper } from './Header.styled'

export const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Logo />
      </Link>
      <PagesMenu>
        <PageItem href="/about">Om oss</PageItem>
        <PageItem href="/events">Arrangemang</PageItem>
        <PageItem href="/contact">Kontakt</PageItem>
        <PageItem href="/pateter">Pateter</PageItem>
      </PagesMenu>
    </Wrapper>
  )
}
