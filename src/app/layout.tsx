import { Metadata } from 'next'
import { Navbar, Social, Email, Footer } from '@/components'
import './globals.css'
import { inter, space } from './fonts'


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
  },
  openGraph: {
    type: 'website',
    url: 'https://albertorodriguez.link/',
    title: 'Alberto Rodriguez - Web & Mobile Developer',
    description: 'Welcome to my personal website. I share my passion for technology, coding, and more.',
    images: [{
      url: ''
    }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.className} ${space.variable}`}>
      <body>
        <Navbar />
        <Social />
        <Email />
        {children}
        <Footer />
      </body>
    </html>
  )
}
