import { IQuestion, IQuiz } from '../../types'
import { Dispatch, SetStateAction } from 'react'
import { useTheme } from 'styled-components'
import gsap from 'gsap'

function useHandleClick(question: IQuestion, setQuiz: Dispatch<SetStateAction<IQuiz>>, seconds: number) {
    const theme = useTheme()

    function handleClick(alternative: 'a' | 'b' | 'c' | 'd') {
        let score = 0

        if (question.alternatives[alternative] === question.answer) {
            gsap.to(`.question .alternatives-${alternative}`, {
                duration: 0.5,
                color: theme.color,
                backgroundColor: theme.success
            })

            score = 10+2.5
        } else {
            gsap.to(`.question .alternatives-${alternative}`, {
                duration: 0.5,
                color: theme.color,
                backgroundColor: theme.error
            })
        }

        setQuiz(quiz => ({ ...quiz, score: score+quiz.score, questions: [...quiz.questions, { ...question, answerResolved: question.alternatives[alternative] }] }))

        gsap.to('.question>.alternatives', {
            pointerEvents: 'none'
        })
    }

    return handleClick
}

export default useHandleClick