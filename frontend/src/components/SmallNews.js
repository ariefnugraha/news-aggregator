import style from './css/smallnews.module.css';
import { Link } from 'react-router-dom';

const NewsList = () => {
    return (
        <div className={style.small_news}>
            <div className={style.image}>
                <Link to="">
                    <img src="https://mojok.co/wp-content/uploads/2019/06/menangis-laki-laki.jpg" alt="TITLE" />
                </Link>
            </div>
            <div className={style.caption}>
                <h2>
                    <Link to="">Asahi daily, an official Tokyo Olympics partner, calls for cancellation of Games</Link>
                </h2>
                <Link to="#" className={style.category}>General</Link>
                <span>12 January 2020</span>
            </div>
        </div>
    )
}

export default NewsList;