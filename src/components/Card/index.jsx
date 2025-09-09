import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import iconFavorite from './favorite.png' //branco
import iconUnFavorite from './unfavorite.png' // vermelho
import { useFavoriteContext } from "../../contexts/Favorites"

function Card({id}) {

    const {favorite, addFavorite} = useFavoriteContext()
    const isFaforite = favorite.some((fav) => fav.id === id)
    const icone = isFaforite ? iconUnFavorite : iconFavorite

    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                alt="Capa" className={styles.capa} />
            </Link>
            <figure className={styles.icon}>
                <img 
                    src={icone} 
                    alt="iconFavorite"
                    onClick={() => addFavorite({id})}
                />
            </figure>
        </section>
    )
}

export default Card