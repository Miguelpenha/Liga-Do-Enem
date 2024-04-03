import styled from 'styled-components'

export const Container = styled.div`
    opacity: 0;
    width: 85%;
    bottom: 0%;
    height: 75%;
    padding: 1em;
    display: flex;
    margin-top: 1em;
    overflow-y: scroll;
    position: absolute;
    align-self: center;
    transform: translateY(300px);
    border-radius: 25px 25px 0 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px -5px 10px;
    background-color: ${props => props.theme.primary};
`

export const Asking = styled.h4`
    width: 40em;
    font-size: 1em;
    margin-top: 0.5em;
    align-self: center;
    color: ${props => props.theme.color};

    @media screen and (max-width: 700px) {
        width: 90%;
    }
`

export const Alternatives = styled.ul`
    gap: 0.8em;
    width: 40em;
    padding: 1em;
    display: flex;
    margin-top: 2em;
    flex-wrap: wrap;
    list-style: none;
    align-self: center;
    filter: blur(20px);
    flex-direction: row;
    border-radius: 10px;
    pointer-events: none;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;

    @media screen and (max-width: 700px) {
        width: 90%;
    }
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
    transition-duration: 0.15s;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;
    background-color: ${props => props.theme.color};

    :hover {
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 25px;
    }
`