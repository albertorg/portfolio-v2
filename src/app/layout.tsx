import { Metadata } from 'next'
import { Navbar, Social, Email, Footer } from '@/components'
import { inter, space } from './fonts'
import './globals.css'


export const metadata: Metadata = {
  title: 'Alberto Rodriguez | Web & Mobile Developer',
  description: 'I am a front-end developer focused on building websites and mobile applications that deliver the best user experience',
  keywords: 'Front-end, develorper, web development, web design, alberto rodriguez, portfolio',
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
      url: 'https://albertorodriguez.link/portfolio.png'
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
