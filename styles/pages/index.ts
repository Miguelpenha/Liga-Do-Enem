import styled from 'styled-components'

export const Container = styled.main`
    height: 100vh;
    display: flex;
    overflow: hidden;
    overflow-y: hidden;
    background-color: ${props => props.theme.secondaryColor};
`