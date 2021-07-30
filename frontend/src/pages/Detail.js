import React, { useState, useEffect } from 'react';
import style from './css/detail.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar';
import NavbarDetail from '../components/NavbarDetail';
import NewsCard from '../components/NewsCard';
import DetailLatest from '../components/DetailLatest';
import Shuffle from '../components/Shuffle';
import Footer from '../components/Footer';

const Detail = (props) => {
    const newsTitle = props.location.state.newsTitle;
    const [scrollPosition, setscrollPosition] = useState(0);
    const [news, setnews] = useState([]);
    const [categoryNews, setcategoryNews] = useState([]);
    let renderNavbar = <Navbar />;
    let renderNewsByCategory;

    //GET NEWS DETAIL
    useEffect(() => {
        axios.get("http://localhost/news/backend/api/get/news-detail.php", {
            params: { title: newsTitle }
        })
            .then(response => {
                let newsId = response.data[0].id;
                let category = response.data[0].category;
                setnews(response.data);

                //GET NEWS BASED ON CATEGORY
                axios.get("http://localhost/news/backend/api/get/news-category.php", {
                    params: {
                        category,
                        "limit-data": 5,
                        "id": newsId
                    }
                })
                    .then(response => setcategoryNews(response.data))
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }, [newsTitle]);

    //CHANGE NAVBAR WHEN SCROLL
    useEffect(() => {
        const scroll = () => setscrollPosition(window.scrollY);
        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, [scrollPosition]);

    //CHECK IF NEWS ALREADY GET FROM SERVER OR NOT
    if (news[0] !== undefined || news.length > 0) {
        scrollPosition > 350 ? renderNavbar = <NavbarDetail title={news[0].title} writer={news[0].author} category={news[0].category} /> : renderNavbar = <Navbar forStyle={{
            "position": "fixed",
            "top": 0,
            "left": 0,
            "right": 0,
            "background-color": "#fff"
        }} />

        renderNewsByCategory = categoryNews.map((news) => {
            return <NewsCard key={news.id} width={{ width: "20%" }} title={news.title} description={news.description} image={news.image} />
        });

        console.log(scrollPosition);

        return (
            <React.Fragment>
                <div className={style.container}>
                    {/* START NAVBAR */}
                    {renderNavbar}
                    {/* END NAVBAR */}

                    {/* START ARTICLE     */}
                    <section className={style.article}>
                        <h1>{news[0].title}</h1>
                        <p className={style.subtitle}>{news[0].description}
                        </p>
                        <div className={style.image}>
                            <img src={news[0].image} alt="TITLE" />
                        </div>
                        <div className={style.info}>
                            <Link to="#">{news[0].author}</Link>
                            <span>11 Januari 2021</span>
                            <Link to="#">General</Link>
                        </div>

                        <p>{news[0].content}</p>

                        <hr></hr>

                        <span className={style.writer}>
                            By <Link to="#">{news[0].author}</Link>
                        </span>
                        <Link className={style.read_original} to={news[0].link} target="_blank">Read in Original Source</Link>
                    </section>
                    {/* END ARTICLE */}

                    {/* START MORE */}
                    <section className={style.more}>
                        <p className={style.title}>More in {news[0].category}</p>
                        <div className={style.flex}>
                            {renderNewsByCategory}
                        </div>

                    </section>
                    {/* END MORE */}

                    {/* START LATEST */}
                    <section className={style.latest}>
                        <p className={style.title}>Latest</p>
                        <DetailLatest newsId={news[0].id} />
                    </section>
                    {/* END LATEST */}

                    {/* START SHUFFLE */}
                    <section className={style.shuffle}>
                        <p className={style.title}>Shuffle This Week</p>
                        <Shuffle newsId={news[0].id} />
                    </section>
                    {/* END SHUFFLE */}


                </div>

                <Footer />
            </React.Fragment>
        )

    } else { return <p>GAADA</p> }
}

export default Detail;