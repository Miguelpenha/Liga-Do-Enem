import gsap from 'gsap'
import { useEffect } from 'react'

function useAnimation(indexQuestion: number) {
    useEffect(() => {
        gsap.to('.timer-bar>.bar', {
            height: '5vh',
            onComplete() {
                gsap.to('.timer-bar>.bar', {
                    delay: 3,
                    duration: 10,
                    height: '100vh',
                    ease: 'sine'
                })
            }
        })
    }, [indexQuestion])
}

export default useAnimation