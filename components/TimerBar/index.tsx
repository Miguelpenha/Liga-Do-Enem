import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Bar } from './style'

interface IProps {
    right?: boolean
    indexQuestion: number
    questionsLength: number
}

const TimerBar: FC<IProps> = ({ right, indexQuestion, questionsLength }) => {
    useAnimation(indexQuestion, questionsLength)

    return (
        <Container className="timer-bar" right={right}>
            <Bar className="bar"/>
        </Container>
    )
}

export default TimerBar