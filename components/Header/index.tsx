import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Image, Title, SubTitle } from './style'

interface IProps {
    name: string
}

const Header: FC<IProps> = ({ name }) => {
    useAnimation()

    return (
        <Container id="header">
            <Image className="image"/>
            <Title className="title">Dalee, {name} 😁</Title>
            <SubTitle className="subtitle">Vai estudar o que hoje?</SubTitle>
        </Container>
    )
}

export default Header