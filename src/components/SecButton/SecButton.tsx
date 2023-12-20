'use client'
import { FC } from "react"

interface Props {
    text: string,
}

export const SecButton: FC<Props> = ({ text }) => {
    return (
        <a 
            href='/CV-Alberto-RG-Nov-2023.pdf' 
            aria-label="CV Alberto Rodriguez"
            target="_blank"
            rel="noopener noreferrer"
            className="font-space text-base-100 border-2 border-primary mr-5 border-solid py-3 px-6 rounded-full bg-primary
                hover:bg-primary-2 hover:text-primary mb-5 sm:mb-0 font-semibold"
        >
            {text}
        </a>
    )
}
