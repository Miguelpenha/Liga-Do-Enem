import Head from '../components/Head'
import { Container } from '../styles/pages'
import Questions from '../components/Questions'

function Home() {
    return <>
        <Head/>
        <Container>
            <Questions/>
        </Container>
    </>
}

export default Home