import { Metadata } from 'next'
import { Space_Mono, Inter } from 'next/font/google'
import { Navbar, Social, Email, Footer } from '@/components';
import './globals.css'

export const metadata: Metadata = {
  title: 'Alberto Rodriguez | Web & Mobile',
  description: 'Generated by create next app',
  keywords: 'Front-end, develorper',
  // icons: ''
}

export const inter = Inter({ subsets: ['latin'] })

export const space = Space_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--space-font'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${space.variable}`}>
        <Navbar />
        <Social />
        <Email />
        {children}
        <Footer />
      </body>
    </html>
  )

}
