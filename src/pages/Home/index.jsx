import styles from './Home.module.css'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Category, {categories, filterCategory}  from '../../components/Category'

function Home() {
  return (
    <>
        <Header />
        <Banner imagem="favoritos" />
        <Container>

          { categories.map((category, index) =>
              <Category category={category}>
                { filterCategory(index).map(video => <Card id={video.id} key={video.id}/> )}
              </Category>
            )}

        </Container>
        <Footer />
    </>
    
  )
}

export default Home
