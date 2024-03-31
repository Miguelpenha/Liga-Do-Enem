import styled from 'styled-components'

export const Container = styled.main`
    height: 100vh;
    display: flex;
    overflow-y: hidden;
    background-color: ${props => props.theme.secondaryColor};
`