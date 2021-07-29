import { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

import style from './css/categorynews.module.css';
const DetailLatest = ({newsId}) => {
    const [news, setnews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/news/backend/api/get/latest.php", {
            params: {
                id: newsId
            }
        })
        .then(response => setnews(response.data.slice(0, 5)))
        .catch(error => console.log(error))
        //eslint-disable-next-line
    }, [])

    const renderNews = news.map((newsItem) => {
        return (
            <div key={newsItem.id} className={style.news_item}>
                <div className={style.image_container}>
                    <Link to="/" title={newsItem.title}>
                        <img src={newsItem.image} alt={newsItem.title} />
                    </Link>
                </div>
                <div className={style.news_caption}>
                    <h2>
                        <Link to="/" title={newsItem.title}>{newsItem.title}</Link>
                    </h2>
                    <p>{newsItem.description}</p>
                </div>

            </div>
        )
    })

    return (
        <div className={style.news_list}>
            {renderNews}
        </div>
    )
}
export default DetailLatest;
