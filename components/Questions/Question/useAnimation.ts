import { Dispatch, SetStateAction, useEffect } from 'react'
import gsap from 'gsap'

function useAnimation(setIndexQuestion: Dispatch<SetStateAction<number>>, index: number) {
    useEffect(() => {
        gsap.to('.question', {
            y: 0,
            opacity: 1,
            duration: 1
        })
    }, [])

    useEffect(() => {
        const timerInitial = setTimeout(() => {
            gsap.to('.question>.alternatives', {
                filter: 'blur(0px)',
                pointerEvents: 'auto'
            })
        }, 3000)

        return () => clearTimeout(timerInitial)
    }, [])

    useEffect(() => {
        const timerInitial = setTimeout(() => {
            gsap.to(`.question`, {
                y: -300,
                opacity: 0,
                delay: 1.5,
                duration: 1,
                onComplete() {
                    setIndexQuestion(index+1)
                }
            })
        }, 13000)

        return () => clearTimeout(timerInitial)
    }, [])
}

export default useAnimation