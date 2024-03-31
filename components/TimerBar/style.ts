import styled, { css } from 'styled-components'

interface IContainer {
    right?: boolean
}

export const Container = styled.span<IContainer>`
    width: 4%;
    z-index: 1;
    bottom: 0%;
    height: 78%;
    position: absolute;
    background-color: #c3c2c2;
    border-radius: 20px 20px 0 0px;

    ${props => props.right ? css`
        right: 0%;
    ` : css`
        left: 0%;
    `}
`

export const Bar = styled.span`
    bottom: 0%;
    width: 100%;
    position: absolute;
    border-radius: 20px 20px 0 0px;
    background-color: ${props => props.theme.primary};
`