import gsap from 'gsap'
import { useEffect } from 'react'

function useAnimation(indexQuestion: number) {
    useEffect(() => {
        gsap.to('.timer-bar>.bar', {
            height: '5%',
            onComplete() {
                gsap.to('.timer-bar>.bar', {
                    delay: 3,
                    duration: 10,
                    ease: 'sine',
                    height: '100%'
                })
            }
        })
    }, [indexQuestion])
}

export default useAnimation