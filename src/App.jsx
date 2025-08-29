import './App.css'
import Banner from './components/Banner'
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
        <Header />
        <Banner imagem="home" />
        <Container>
          <h1>Hello Word</h1>
          <p>Ola Mundo! Estou aprendendo React JS!</p>
        </Container>
        <Footer />
    </>
    
  )
}

export default App
