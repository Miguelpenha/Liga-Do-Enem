import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 0 1em;
    margin-top: 2em;
    margin-bottom: 5em;
`

export const Title = styled.span`
    font-size: 1em;
    color: ${props => props.theme.color};
`

export const MattersList = styled.ul`
    gap: 4em;
    display: flex;
    margin-top: 1em;
    overflow: scroll;
    padding-bottom: 1em;
    flex-direction: row;
    scroll-snap-type: x mandatory;
`

export const Matter = styled.li`
    list-style: none;
    position: relative;
    scroll-snap-align: center;
`

export const MatterImage = styled.div`
    width: 10em;
    height: 10em;
    background-color: ${props => props.theme.secondary};
`

export const MatterTitle = styled.span`
    left: 50%;
    bottom: 10%;
    display: flex;
    font-size: 1em;
    margin-top: 0.5em;
    position: absolute;
    transform: translateX(-50%);
    color: ${props => props.theme.secondaryColor};
`