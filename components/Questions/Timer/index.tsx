import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Bar } from './style'

interface IProps {
    right?: boolean
    indexQuestion: number
}

const Timer: FC<IProps> = ({ right, indexQuestion }) => {
    useAnimation(indexQuestion)

    return (
        <Container className="timer" right={right}>
            <Bar className="bar"/>
        </Container>
    )
}

export default Timer