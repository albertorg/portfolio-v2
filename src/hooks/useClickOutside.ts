import { useEffect, useRef, RefObject } from 'react'

export const useClickOutside = <T extends HTMLElement>(callback: () => void): RefObject<T> => {
    const ref = useRef<T>(null);

    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [callback])

    return ref
}
