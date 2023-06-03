'use client'

import { space } from "@/fonts"
import { FC } from "react"

interface Props {
    text: string,
    action?: () => {}
}

export const Button: FC<Props> = ({text}) => {

    const onClick = () => {
        console.log('Redirect to email')
        window.location.href='mailto: ticoc911@gmall.com'
    }

    return (
        <button 
            onClick={onClick}
            className={`${space.className} text-primary border-2 border-primary border-solid py-3 px-6 rounded-full
            hover:bg-primary-2`}
        >
            {text}
        </button>
    )
}
