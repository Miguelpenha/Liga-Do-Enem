import { Container, Title, Quizzes, Quiz, QuizImage, QuizTitle } from './style'
import quizzesFamous from '../../services/quizzesFamous.json'

function Famous() {
    return (
        <Container>
            <Title>Os mais hypados do momento</Title>
            <Quizzes>
                {quizzesFamous.map(quiz => (
                    <Quiz>
                        <QuizImage/>
                        <QuizTitle>{quiz.title}</QuizTitle>
                    </Quiz>
                ))}
            </Quizzes>
        </Container>
    )
}

export default Famous