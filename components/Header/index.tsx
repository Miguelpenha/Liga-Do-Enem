import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Image, Title, SubTitle } from './style'
import blurDataURL from '../../utils/blurDataURL'

interface IProps {
    name: string
    profileImage: string
}

const Header: FC<IProps> = ({ name, profileImage }) => {
    useAnimation()

    return (
        <Container id="header">
            <Image
                alt={name}
                width={640}
                height={640}
                className="image"
                placeholder="blur"
                src={profileImage}
                blurDataURL={blurDataURL}
            />
            <Title className="title">Dalee, {name} 😁</Title>
            <SubTitle className="subtitle">Vai estudar o que hoje?</SubTitle>
        </Container>
    )
}

export default Header