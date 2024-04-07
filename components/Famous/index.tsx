import useAnimation from './useAnimation'
import { Container, Title, Quizzes, Quiz, QuizImage, QuizTitle } from './style'
import quizzesFamous from '../../services/quizzesFamous.json'

function Famous() {
    useAnimation()

    return (
        <Container id="quizzes-famous">
            <Title className="title">Os mais hypados do momento 🔥</Title>
            <Quizzes className="list">
                {quizzesFamous.map((quiz, index) => (
                    <Quiz key={index} className="quiz">
                        <QuizImage/>
                        <QuizTitle className="title">{quiz.title}</QuizTitle>
                    </Quiz>
                ))}
            </Quizzes>
        </Container>
    )
}

export default Famous