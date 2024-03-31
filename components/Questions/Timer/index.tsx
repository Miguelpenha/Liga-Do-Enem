import useAnimation from './useAnimation'
import { Container, Time, Message } from './style'

function Timer() {
    const { seconds, message } = useAnimation()

    return (
        <Container id="timer">
            <Time>{seconds}</Time>
            <Message>{message}</Message>
        </Container>
    )
}

export default Timer