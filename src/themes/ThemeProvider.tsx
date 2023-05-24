'use client'
import { FC, ReactNode } from 'react'
import { ThemeProvider as ThemesProvider } from 'styled-components'
import theme from './theme.json'
import { GlobalStyle } from './GlobalStyle'
import { Open_Sans } from 'next/font/google'

export type ThemeType = typeof theme

export interface ThemeProviderProps {
  children?: ReactNode
}

const openSans = Open_Sans({ subsets: ['latin'] })

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemesProvider theme={theme}>
      <GlobalStyle />
      <body className={openSans.className}>{children}</body>
    </ThemesProvider>
  )
}
