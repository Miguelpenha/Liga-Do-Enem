import IQuestion from './question'

interface IQuestionResolved extends IQuestion {
    answerResolved: string | false
}

interface IQuiz {
    score: number
    questions: IQuestionResolved[]
}

export default IQuiz