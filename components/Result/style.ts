import styled from 'styled-components'

export const Container = styled.div`
    opacity: 0;
    width: 85%;
    bottom: 0%;
    height: 75%;
    padding: 1em;
    display: flex;
    margin-top: 1em;
    overflow-y: scroll;
    position: absolute;
    align-self: center;
    transform: translateY(300px);
    border-radius: 25px 25px 0 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px -5px 10px;
    background-color: ${props => props.theme.primary};
`

export const Title = styled.h3`
    margin: 1em;
    color: #FFFFFF;
    font-size: 1.5em;
    margin-top: 0.5em;
    text-align: center;
    align-self: center;
`

export const AnswersResolved = styled.div`
    gap: 1em;
    display: flex;
`

interface IAnswerResolved {
    answerCorrect: boolean
}

export const AnswerResolved = styled.div<IAnswerResolved>`
    padding: 1em;
    font-weight: bold;
    border-radius: 10px;
    background-color: #FFFFFF;
    color: ${props => props.answerCorrect ? 'green' : 'red'};
`

interface IIcon {
    answerCorrect: boolean
}

export const Icon = styled.svg<IIcon>`
    fill: ${props => props.answerCorrect ? 'green' : 'red'};
`