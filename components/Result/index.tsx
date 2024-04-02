import { IQuiz } from '../../types'
import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Title, AnswersResolved, AnswerResolved } from './style'

interface IProps {
    quiz: IQuiz
}

const Result: FC<IProps> = ({ quiz }) => {
    useAnimation()

    return (
        <Container id="result">
            <Title>Você fez {quiz.score} pontos</Title>
            <AnswersResolved>
                {quiz.questions.map((question, index) => (
                    <AnswerResolved key={index} answerCorrect={(question.answerResolved ? question.answerResolved == question.answer : question.answerResolved) as boolean}>
                        {index+1}° {question.answerResolved || 'Não resolvida'}
                    </AnswerResolved>
                ))}
            </AnswersResolved>
        </Container>
    )
}

export default Result