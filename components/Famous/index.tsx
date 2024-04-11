import useAnimation from './useAnimation'
import { Container, Title, Quizzes, Quiz, QuizImage, QuizTitle } from './style'
import quizzesFamous from '../../services/quizzesFamous.json'
import blurDataURL from '../../utils/blurDataURL'

function Famous() {
    useAnimation()

    return (
        <Container id="quizzes-famous">
            <Title className="title">Os mais hypados do momento 🔥</Title>
            <Quizzes className="list">
                {quizzesFamous.map((quiz, index) => (
                    <Quiz key={index} className="quiz">
                        <QuizImage
                            width={608}
                            height={608}
                            alt={quiz.title}
                            placeholder="blur"
                            src={quiz.thumbnail}
                            blurDataURL={blurDataURL}
                        />
                        <QuizTitle className="title">{quiz.title}</QuizTitle>
                    </Quiz>
                ))}
            </Quizzes>
        </Container>
    )
}

export default Famous