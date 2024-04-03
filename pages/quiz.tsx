import useTimer from '../components/useTimer'
import { IQuiz } from '../types'
// import api from '../services/api'
import questionsRaw from '../services/questions.json'
import { useState, useEffect } from 'react'
import Head from '../components/Head'
import { Container } from '../styles/pages/quiz'
import Timer from '../components/Timer'
import TimerBar from '../components/TimerBar'
import Question from '../components/Question'
import Result from '../components/Result'

function Quiz() {
    // const { data: questions } = api.get<[]>('/questions')
    const questions = questionsRaw.slice(0, 8)
    const [indexQuestion, setIndexQuestion] = useState(7)
    const timer = useTimer(indexQuestion, questions.length)
    const [heightDevice, setHeightDevice] = useState<number>()
    const [quiz, setQuiz] = useState<IQuiz>({ score: 0, questions: [] })

    useEffect(() => {
        setHeightDevice(window.innerHeight)
    }, [])

    if (heightDevice) {
        return <>
            <Head/>
            <Container height={heightDevice}>
                <Timer message={timer.message} seconds={timer.seconds}/>
                <TimerBar questionsLength={questions.length} indexQuestion={indexQuestion}/>
                {questions && questions.map((question, index) => (
                    index === indexQuestion && (
                        <Question seconds={timer.seconds} setQuiz={setQuiz} setIndexQuestion={setIndexQuestion} index={index} question={question} key={index}/>
                    )
                ))}
                {timer.finished && <Result quiz={quiz}/>}
                <TimerBar right questionsLength={questions.length} indexQuestion={indexQuestion}/>
            </Container>
        </>
    }
}

export default Quiz