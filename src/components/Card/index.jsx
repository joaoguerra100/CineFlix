import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import iconFavorite from './favorite.png'
import iconUnFavorite from './unfavorite.png'

function Card({id}) {
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
            </Link>
            <figure>
                <img src={iconFavorite} alt="iconFavorite"/>
            </figure>
        </section>
    )
}

export default Card