import { Metadata } from 'next'
import { Space_Mono, Inter } from 'next/font/google'
import { Navbar, Social, Email, Footer } from '@/components';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const space = Space_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--space-font'
})

export const metadata: Metadata = {
  title: 'Alberto Rodriguez | Web & Mobile Developer',
  description: 'I am a front-end developer focused on building websites and mobile applications that deliver the best user experience',
  keywords: 'Front-end, develorper',
  authors: {
    name: 'Alberto Rodriguez',
    url: 'https://albertorodriguez.link/'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@albertorgdev',
    title: 'Alberto Rodriguez - Web Developer',
    description: 'Passionate web developer specializing in modern web applications.',
    images: 'https://albertorodriguez.link/perfil.jpg'
  }
}

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
