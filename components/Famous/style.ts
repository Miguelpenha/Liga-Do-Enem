import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
    display: flex;
    padding: 0 1em;
    margin-top: 3em;
`

export const Title = styled.span`
    opacity: 0;
    font-size: 1em;
    transform: translateY(100%);
    color: ${props => props.theme.color};
`

export const Quizzes = styled.ul`
    gap: 1.5em;
    display: flex;
    margin-top: 1em;
    overflow: scroll;
    padding-bottom: 1em;
    flex-direction: row;
    scroll-snap-type: x mandatory;
`

export const Quiz = styled.li`
    opacity: 0;
    list-style: none;
    scroll-snap-align: center;
    transform: translateX(50%);
`

export const QuizImage = styled(Image)`
    width: 10em;
    height: 10em;
    background-color: ${props => props.theme.secondary};
`

export const QuizTitle = styled.span`
    display: flex;
    font-size: 1em;
    margin-top: 0.5em;
    color: ${props => props.theme.secondaryColor};
`