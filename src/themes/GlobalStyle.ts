'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.main}; 
    
    color: ${({ theme }) => theme.colors.secondary};
  }
`
