import { FC } from 'react'
import { Container, Time, Message } from './style'

interface IProps {
    seconds: number
    message: string
}

const Timer: FC<IProps> = ({ seconds, message }) => {
    return (
        <Container id="timer">
            <Time className="time">{seconds}</Time>
            <Message className="message">{message}</Message>
        </Container>
    )
}

export default Timer