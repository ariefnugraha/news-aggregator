import style from './css/newscard.module.css';
import {Link} from 'react-router-dom';
const NewsCard = (props) => {
    return (
        <div className={style.news_card} style={props.width}>
            <div className={style.news_image}>
                <Link to="#">
                <img src="https://mojok.co/wp-content/uploads/2019/06/menangis-laki-laki.jpg" alt="TITLE" />
                </Link>
            </div>
            <div className={style.news_caption}>
                <Link to="">Indonesia’s beloved pop/rock band Naif officially disbands after 25 years</Link>
                <p>Indonesia’s beloved pop/rock band Naif officially disbands after 25 years</p>
            </div>
        </div>
    )
}

export default NewsCard;