import style from './css/bigheadline.module.css';
import { Link } from 'react-router-dom';

const BigHeadline = ({ news }) => {
    return (
        <div className={style.big_headline}>
            <h1>
                <Link to={{
                    pathname: "/detail",
                    search: `${news.title}`,
                    state: { newsTitle: news.title }
                }} title={news.title}>{news.title}</Link>
            </h1>
            <p>{news.description}.</p>
            <div className={style.image_container}>
                <Link to={{
                    pathname: "/detail",
                    search: `${news.title}`,
                    state: { newsTitle: news.title }
                }}>
                    <img src={news.image} alt={news.title} />
                </Link>
            </div>
        </div>
    )
}

export default BigHeadline;