'use client'
import { FC } from "react"

interface Props {
    text: string,
}

export const Button: FC<Props> = ({ text }) => {

    const onClick = () => {
        window.location.href='mailto: ticoc911@gmail.com'
    }

    return (
        <button 
            onClick={onClick}
            className={"font-space text-primary border-2 border-primary border-solid py-3 px-6 rounded-full hover:bg-primary-2"}
        >
            {text}
        </button>
    )
}


