import Head from '../components/Head'
import { Container, Button } from '../styles/pages'
import Header from '../components/Header'
import Famous from '../components/Famous'
import Matters from '../components/Matters'

function Home() {
    const name = 'Miguel'

    return <>
        <Head/>
        <Container>
            <Header name={name} profileImage="/img/profile.png"/>
            <Button href="/quiz">
                <span>Começar 🔥</span>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                    </g>
                    <g>
                        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/>
                    </g>
                </svg>
            </Button>
            <Famous/>
            <Matters/>
        </Container>
    </>
}

export default Home