import 'styled-components/macro'
import { ThemeType } from './ThemeProvider'

declare module 'styled-components/macro' {
  export interface DefaultTheme extends ThemeType {}
}
