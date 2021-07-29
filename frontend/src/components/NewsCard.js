import style from './css/newscard.module.css';
import { Link } from 'react-router-dom';
const NewsCard = ({ width, title, description, image }) => {
    let sliceText;
    title.length > 80 ? sliceText = `${title.substr(0,55)}...` : sliceText = title;

    return (
        <div className={style.news_card} style={width}>
            <div className={style.news_image}>
                <Link to={{
                    pathname: "/detail",
                    search: `${title}`,
                    state: { newsTitle: title }
                }}>
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className={style.news_caption}>
                <h2>
                    <Link to={{ 
                        pathname: "/detail",
                        search: `${title}`,
                        state: { newsTitle: title }
                    }} title={title}>{sliceText}</Link>
                </h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NewsCard;