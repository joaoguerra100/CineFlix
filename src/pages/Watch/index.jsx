import styles from './Watch.module.css'
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"

function Watch() {
    return (
        <>
            <Header/>
            <Container>
                <section className={styles.watch}>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=sD08537Cw4qWiWS7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer/>
        </>
    )
}

export default Watch