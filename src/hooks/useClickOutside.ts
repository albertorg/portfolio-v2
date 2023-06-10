import { useEffect, useRef, RefObject } from 'react'

export const useClickOutside = <T extends HTMLElement>(callback: () => void): RefObject<T> => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const listener = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback()
        }
    }

        document.addEventListener('click', listener)

        return () => {
            document.removeEventListener('click', listener)
        }
    }, [callback, ref])

    return ref
}
