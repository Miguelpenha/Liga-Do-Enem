import { Container, Title, MattersList, Matter, MatterImage, MatterTitle } from './style'
import matters from './matters'

function Matters() {
    return (
        <Container>
            <Title>Escolha uma máteria aí 📚</Title>
            <MattersList>
                {matters.map(matter => (
                    <Matter>
                        <MatterImage/>
                        <MatterTitle>{matter}</MatterTitle>
                    </Matter>
                ))}
            </MattersList>
        </Container>
    )
}

export default Matters