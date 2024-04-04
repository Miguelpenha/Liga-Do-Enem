import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 0 1em;
    margin-top: 3em;
`

export const Title = styled.span`
    font-size: 1em;
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
    list-style: none;
    scroll-snap-align: center;
`

export const QuizImage = styled.div`
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