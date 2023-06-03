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
    }

    return (
        <button 
            onClick={onClick}
            className={`${space.className} text-primary`}
        >
            {text}
        </button>
    )
}
