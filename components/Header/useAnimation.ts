import { useEffect } from 'react'
import gsap from 'gsap'

function useAnimation() {
    useEffect(() => {
        gsap.to('.image', {
            scale: 1,
            opacity: 1,
            borderRadius: '50%',
            duration: 1
        })

        gsap.to('.title, .subtitle', {
            y: 0,
            opacity: 1,
            stagger: 0.5
        })
    }, [])
}

export default useAnimation