import { useEffect } from 'react'
import gsap from 'gsap'

function useAnimation() {
    useEffect(() => {
        gsap.to('#result', {
            y: 0,
            opacity: 1,
            duration: 1
        })
    }, [])
}

export default useAnimation