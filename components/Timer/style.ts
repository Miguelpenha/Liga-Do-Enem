import styled from 'styled-components'

export const Container = styled.nav`
    opacity: 0;
    width: 12em;
    padding: 1em;
    margin: auto;
    display: flex;
    margin-top: 1em;
    align-items: center;
    border-radius: 15px;
    color: ${props => props.theme.color};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
    background-color: ${props => props.theme.primary};
`

export const Time = styled.span`
    font-size: 2.5em;
    font-weight: bold;
    color: ${props => props.theme.color};
`

export const Message = styled.span`
    font-size: 1em;
    font-weight: bold;
    color: ${props => props.theme.color};
`