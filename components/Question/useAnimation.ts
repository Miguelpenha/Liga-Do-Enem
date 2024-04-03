import { Dispatch, SetStateAction, useEffect } from 'react'
import { IQuestion, IQuiz } from '../../types'
import { useTheme } from 'styled-components'
import gsap from 'gsap'

function useAnimation(setIndexQuestion: Dispatch<SetStateAction<number>>, index: number, question: IQuestion, setQuiz: Dispatch<SetStateAction<IQuiz>>) {
    const theme = useTheme()

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
                    setQuiz(quiz => {
                        if (!quiz.questions[index]) {
                            return { ...quiz, questions: [...quiz.questions, { ...question, answerResolved: false }] }
                        } else {
                            return quiz
                        }
                    })

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
                    color: theme.color,
                    pointerEvents: 'none',
                    backgroundColor: (question.alternatives as any)[key] === question.answer ? theme.success : theme.error
                })
            })
        }, 13000)

        return () => clearTimeout(timerInitial)
    }, [])
}

export default useAnimation