import questions from '../../services/questions.json'
import api from '../../services/api'
import { useState } from 'react'
import { Container } from './style'
import Timer from './Timer'
import Question from './Question'

function Questions() {
    // const { data: questions } = api.get<[]>('/questions')
    const [indexQuestion, setIndexQuestion] = useState(0)

    return (
        <Container>
            <Timer indexQuestion={indexQuestion}/>
            {questions && questions.map((question, index) => (
                index === indexQuestion && (
                    <Question setIndexQuestion={setIndexQuestion} index={index} question={question} key={index}/>
                )
            ))}
            <Timer right indexQuestion={indexQuestion}/>
        </Container>
    )
}

export default Questions