import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Container = styled.header`
    display: flex;
    padding-left: 1.5em;
    padding-bottom: 2.5em;
    background-color: ${props => props.theme.primary};
`

export const Image = styled(ImageRaw)`
    opacity: 0;
    width: 3.5em;
    height: 3.5em;
    margin: 1em 0;
    margin-top: 1em;
    border-radius: 25%;
    transform: scale(0.4);
    background-color: ${props => props.theme.secondary};
`

export const Title = styled.h1`
    opacity: 0;
    font-size: 2.3em;
    font-weight: bold;
    transform: translateY(50%);
    color: ${props => props.theme.color};
`

export const SubTitle = styled.h4`
    opacity: 0;
    font-size: 1.3em;
    font-weight: 100;
    transform: translateY(50%);
    color: ${props => props.theme.color};
`