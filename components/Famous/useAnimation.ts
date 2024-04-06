import { useEffect } from 'react'
import gsap from 'gsap'

function useAnimation() {
    useEffect(() => {
        gsap.to('#quizzes-famous>.title', {
            y: 0,
            opacity: 1
        })

        gsap.to('#quizzes-famous>.quiz', {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2
        })
    }, [])
}

export default useAnimation