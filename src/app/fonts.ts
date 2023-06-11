import { Inter, Space_Mono } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
})

export const space = Space_Mono({
    weight: '400',
    subsets: ['latin'],
    variable: '--space-font',
    display: 'swap',
    preload: true
})