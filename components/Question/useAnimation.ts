import { Dispatch, SetStateAction, useEffect } from 'react'
import gsap from 'gsap'

interface IQuestion {
    area: string
    image: string
    matter: string
    answer: string
    asking: string
    subject: string
    difficulty: string
    alternatives: {
        a: string
        b: string
        c: string
        d: string
    }
}

function useAnimation(setIndexQuestion: Dispatch<SetStateAction<number>>, index: number, question: IQuestion) {
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
                y: 300,
                delay: 3,
                opacity: 0,
                duration: 1,
                onComplete() {
                    setIndexQuestion(index+1)
                }
            })
        }, 13000)

        return () => clearTimeout(timerInitial)
    }, [])

    useEffect(() => {
        const timerInitial = setTimeout(() => {
            Object.keys(question.alternatives).map(key => {
                gsap.to(`.question .alternatives-${key}`, {
                    duration: 0.5,
                    color: '#ffffff',
                    pointerEvents: 'none',
                    backgroundColor: (question.alternatives as any)[key] === question.answer ? 'green' : 'red'
                })
            })
        }, 13000)

        return () => clearTimeout(timerInitial)
    }, [])
}

export default useAnimation