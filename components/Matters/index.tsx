import { Container, Title, MattersList, Matter, MatterImage, MatterTitle } from './style'
import matters from './matters'

function Matters() {
    return (
        <Container>
            <Title>Escolhe uma máteria aí 📚</Title>
            <MattersList>
                {matters.map((matter, index) => (
                    <Matter key={index}>
                        <MatterImage/>
                        <MatterTitle>{matter}</MatterTitle>
                    </Matter>
                ))}
            </MattersList>
        </Container>
    )
}

export default Matters