import styled from 'styled-components'

export const Container = styled.nav`
    top: -15%;
    z-index: 2;
    opacity: 0;
    width: 12em;
    padding: 1em;
    display: flex;
    position: fixed;
    align-items: center;
    border-radius: 15px;
    color: ${props => props.theme.color};
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