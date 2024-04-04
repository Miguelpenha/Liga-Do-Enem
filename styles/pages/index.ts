import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.main`
    display: flex;
    min-height: 100vh;
    background-color: ${props => props.theme.background};
`

export const Header = styled.header`
    display: flex;
    padding-left: 1.5em;
    padding-bottom: 2.5em;
    background-color: ${props => props.theme.primary};
`

export const Image = styled.div`
    width: 3.5em;
    height: 3.5em;
    margin: 1em 0;
    margin-top: 2.5em;
    border-radius: 50%;
    background-color: ${props => props.theme.secondary};
`

export const Title = styled.h1`
    font-size: 2.3em;
    font-weight: bold;
    color: ${props => props.theme.color};
`

export const SubTitle = styled.h4`
    font-size: 1.3em;
    font-weight: 100;
    color: ${props => props.theme.color};
`

export const Button = styled(Link)`
    padding: 1em;
    display: flex;
    margin-top: 2em;
    align-self: center;
    border-radius: 10px;
    flex-direction: row;
    text-decoration: none;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.primary};

    span {
        font-size: 1.2em;
        font-weight: bold;
        color: ${props => props.theme.color};
    }

    svg {
        width: 1.5em;
        height: auto;
        margin-left: 0.5em;
        fill: ${props => props.theme.color};
    }

    :hover {
        transform: scale(1.1);
    }
`