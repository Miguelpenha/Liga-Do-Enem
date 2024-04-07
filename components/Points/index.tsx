import { FC } from 'react'
import { Container, Score } from './style'

interface IProps {
    score: number
}

const Points: FC<IProps> = ({ score }) => {
    return (
        <Container id="points">
            <Score>{score}</Score>
        </Container>
    )
}

export default Points