import { ThemeProvider } from '../themes/ThemeProvider'

export const metadata = {
  title: 'Programkomittén PU',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider children={children} />
    </html>
  )
}
