import styles from './Home.module.css'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Category, {categories, filterCategory}  from '../../components/Category'
import Carousel from '../../components/Carousel'
import ScrollToTopButton from '../../components/ScrollToTopButton'

function Home() {
  return (
    <>
        <ScrollToTopButton/>
        <Header />
        <Banner imagem="favoritos" />
        <Container>

          { categories.map((category, index) =>
              <Category category={category}>
                <Carousel>
                  { filterCategory(index).map(video => <Card id={video.id} key={video.id}/> )}
                </Carousel>
              </Category>
            )}

        </Container>
        <Footer />
    </>
    
  )
}

export default Home
