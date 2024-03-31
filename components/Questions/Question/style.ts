import styled from 'styled-components'

export const Container = styled.div`
    opacity: 0;
    width: 40em;
    padding: 1em;
    display: flex;
    border-radius: 15px;
    transform: translateY(20%);
    background-color: ${props => props.theme.primary};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 20px;

    @media screen and (max-width: 700px) {
        width: 90%;
    }
`

export const Asking = styled.h4`
    color: #FFFFFF;
    margin-top: 0.5em;
`

export const Alternatives = styled.ul`
    gap: 1.5em;
    padding: 1em;
    display: flex;
    margin-top: 2em;
    flex-wrap: wrap;
    list-style: none;
    filter: blur(20px);
    flex-direction: row;
    border-radius: 10px;
    pointer-events: none;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
`

export const ContainerAlternative = styled.li`
    display: flex;
    align-self: center;

    @media screen and (max-width: 350px) {
        &, button {
            width: 100%;
        }
    }
`

export const Alternative = styled.button`
    width: 15em;
    border: none;
    padding: 1em;
    display: flex;
    font-size: 1em;
    cursor: pointer;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    transform: scale(0.9);
    justify-content: center;
    background-color: #FFFFFF;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;

    :hover {
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 25px;
    }
`