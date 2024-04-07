import styled from 'styled-components'

export const Container = styled.div`
    width: 4em;
    height: 4em;
    margin: 1em;
    display: flex;
    position: absolute;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.primary};
`

export const Score = styled.div`
    font-size: 1.5em;
    color: ${props => props.theme.color};
`