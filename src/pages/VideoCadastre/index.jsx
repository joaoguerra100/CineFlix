import styles from './VideoCadastre.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import Form from '../../components/Form'

function VideoCadastre() {
    return (
        <>
            <Header/>
            <Container>
                <Form />
            </Container>
            <Footer/>
        </>
    )
}

export default VideoCadastre