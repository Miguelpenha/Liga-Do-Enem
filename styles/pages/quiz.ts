import styled from 'styled-components'

interface IContainer {
    height: number
}

export const Container = styled.main<IContainer>`
    display: flex;
    overflow: hidden !important;
    overflow-y: hidden !important;
    height: ${props => props.height}px;
    background-color: ${props => props.theme.background};
`