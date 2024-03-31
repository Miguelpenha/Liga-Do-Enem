// import api from '../services/api'
import { useState } from 'react'
import Head from '../components/Head'
import { Container } from '../styles/pages'
import Timer from '../components/Timer'
import TimerBar from '../components/TimerBar'
import questions from '../services/questions.json'
import Question from '../components/Question'

function Home() {
    // const { data: questions } = api.get<[]>('/questions')
    const [indexQuestion, setIndexQuestion] = useState(0)

    return <>
        <Head/>
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
    </>
}

export default Home