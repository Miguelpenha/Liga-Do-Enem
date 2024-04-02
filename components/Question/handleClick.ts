import { IQuestion, IQuiz } from '../../types'
import { Dispatch, SetStateAction } from 'react'
import gsap from 'gsap'

function useHandleClick(question: IQuestion, setQuiz: Dispatch<SetStateAction<IQuiz>>, seconds: number) {
    function handleClick(alternative: 'a' | 'b' | 'c' | 'd') {
        let score = 0

        if (question.alternatives[alternative] === question.answer) {
            gsap.to(`.question .alternatives-${alternative}`, {
                duration: 0.5,
                color: '#ffffff',
                backgroundColor: 'green'
            })

            score = 10+2.5
        } else {
            gsap.to(`.question .alternatives-${alternative}`, {
                duration: 0.5,
                color: '#ffffff',
                backgroundColor: 'red'
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