import { IQuestion, IQuiz } from '../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import useHandleClick from './handleClick'
import useAnimation from './useAnimation'
import { Container, Asking, Alternatives, ContainerAlternative, Alternative } from './style'

interface IProps {
    index: number
    seconds: number
    question: IQuestion
    setQuiz: Dispatch<SetStateAction<IQuiz>>
    setIndexQuestion: Dispatch<SetStateAction<number>>
}

const Question: FC<IProps> = ({ question, index, setIndexQuestion, setQuiz, seconds }) => {
    const handleClick = useHandleClick(question, setQuiz, seconds)
    
    useAnimation(setIndexQuestion, index, question, setQuiz)

    return (
        <Container className="question">
            <Asking>{index+1}° {question.asking}</Asking>
            <Alternatives className="alternatives">
                <ContainerAlternative>
                    <Alternative onClick={() => handleClick('a')} className="alternatives-a">A. {question.alternatives.a}</Alternative>
                </ContainerAlternative>
                <ContainerAlternative>
                    <Alternative onClick={() => handleClick('b')} className="alternatives-b">B. {question.alternatives.b}</Alternative>
                </ContainerAlternative>
                <ContainerAlternative>
                    <Alternative onClick={() => handleClick('c')} className="alternatives-c">C. {question.alternatives.c}</Alternative>
                </ContainerAlternative>
                <ContainerAlternative>
                    <Alternative onClick={() => handleClick('d')} className="alternatives-d">D. {question.alternatives.d}</Alternative>
                </ContainerAlternative>
            </Alternatives>
        </Container>
    )
}

export default Question