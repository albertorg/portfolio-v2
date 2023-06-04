import { Inter, Space_Mono, Open_Sans } from 'next/font/google';

export const space = Space_Mono({
    weight: '400',
    subsets: ['latin'],
    variable: '--space-font'
});

export const inter = Inter({ subsets: ['latin'] })



// delete if not use
export const sans = Open_Sans({
    subsets: ['latin']
})