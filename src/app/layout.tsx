import { Metadata } from 'next'
import { inter, space } from '@/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alberto Rodriguez | Web & Mobile',
  description: 'Generated by create next app',
  keywords: '',
  icons: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${space.variable}`}>
        {children}
      </body>
    </html>
  )

}
