'use client'
import { FC } from "react"
// import CV from '@/assets/CV.pdf'

interface Props {
    text: string,
}

export const SecButton: FC<Props> = ({ text }) => {

    const onClick = () => {
        window.location.href= '/CV.pdf'
    }

    return (
        <a 
            href='/CV.pdf' 
            aria-label="CV Alberto Rodriguez"
            target="_blank"
            rel="noopener noreferrer"
            className="font-space text-base-100 font-medium border-2 border-primary mr-5 border-solid py-3 px-6 rounded-full bg-primary
                hover:bg-primary-2 hover:text-primary"
        >
            {text}
        </a>
    )
}
