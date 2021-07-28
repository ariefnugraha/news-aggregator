import { React, useState, useEffect } from 'react';
import axios from 'axios';
import style from './css/categorynews.module.css';
import { Link } from 'react-router-dom';

const CategoryNews = (props) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:80/news/backend/api/get/news-category.php", {
            params: {
                category: props.categoryName
            }
        })
            .then(response => setNews(response.data))
            .catch(error => console.log(error));
        //eslint-disable-next-line
    }, []);

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

export default CategoryNews;