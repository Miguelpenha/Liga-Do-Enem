import questions from '../../services/questions.json'
import api from '../../services/api'
import { useState } from 'react'
import { Container } from './style'
import Timer from './Timer'
import TimerBar from './TimerBar'
import Question from './Question'

function Questions() {
    // const { data: questions } = api.get<[]>('/questions')
    const [indexQuestion, setIndexQuestion] = useState(0)

    return (
        <Container>
            <Timer/>
            <TimerBar indexQuestion={indexQuestion}/>
            {questions && questions.map((question, index) => (
                index === indexQuestion && (
                    <Question setIndexQuestion={setIndexQuestion} index={index} question={question} key={index}/>
                )
            ))}
            <TimerBar right indexQuestion={indexQuestion}/>
        </Container>
    )
}

export default Questions