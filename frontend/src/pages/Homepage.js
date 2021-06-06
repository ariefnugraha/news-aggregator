import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import style from './css/homepage.module.css';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import BigHeadline from '../components/BigHeadline';
import SmallHeadline from '../components/SmallHeadline';
import MasonryItem from '../components/MasonryItem';
import CategoryNews from '../components/CategoryNews';
import Footer from '../components/Footer';

//IMPORT IMAGE
import economyIcon from '../assets/icons/economy.svg';
import entertainmentIcon from '../assets/icons/entertainment.svg';
import sportsIcon from '../assets/icons/sports.svg';
import technologyIcon from '../assets/icons/technology.svg';
import scienceIcon from '../assets/icons/science.svg';
import healthIcon from '../assets/icons/health.svg';

const Homepage = () => {
    const [headlines, setHeadlines] = useState([]);
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:80/news/backend/api/get/headlines.php")
            .then(response => setLatest(response.data))
            .catch(error => console.log(error));
    }, [])

    const renderLatest = latest.map((news) => {
        return <MasonryItem key={news.id} title={news.title} description={news.title} image={news.image} category={news.category} date={news.date} />
    })


    return (
        <React.Fragment>
            <div className={style.container}>
                <Navbar />
                <section className={style.headline}>
                    <BigHeadline />
                    <div className={style.flex}>
                        <SmallHeadline />
                        <SmallHeadline />
                        <SmallHeadline />
                        <SmallHeadline />
                    </div>
                </section>

                <section className={style.latest}>
                    <p className={style.title}>Latest</p>
                    <Masonry breakpointCols={5} className={style.masonry} columnClassName={style.masonry_item}>
                        {renderLatest}
                    </Masonry>
                </section>

                <section className={style.category_news}>
                    <p className={style.title}>Sports</p>
                    <CategoryNews categoryName="sports" />
                </section>

                <section className={style.category_news}>
                    <p className={style.title}>General</p>
                    <CategoryNews categoryName="general" />
                </section>

                <section className={style.category_list_container}>
                    <div className={style.category_caption}>
                        <p className={style.title}>Explore The News, Share The Truth</p>
                        <p>We give you many news from many fields. From technology to health. We also make sure our source is credible media so you will not read a false news. </p>
                    </div>
                    <div className={style.category_list}>
                        <div className={style.category_item}>
                            <Link to="/">
                                <img src={economyIcon} alt="Economy" />
                            Economy
                        </Link>
                        </div>

                        <div className={style.category_item}>
                            <Link to="">
                                <img src={entertainmentIcon} alt="Entertainment" />
                            Entertainment
                        </Link>
                        </div>

                        <div className={style.category_item}>
                            <Link to="">
                                <img src={sportsIcon} alt="Sports" />
                            Sports
                        </Link>
                        </div>

                        <div className={style.category_item}>
                            <Link to="">
                                <img src={technologyIcon} alt="Technology" />
                            Technology
                        </Link>
                        </div>

                        <div className={style.category_item}>
                            <Link to="">
                                <img src={scienceIcon} alt="Science" />
                            Science
                        </Link>
                        </div>

                        <div className={style.category_item}>
                            <Link to="">
                                <img src={healthIcon} alt="Health" />
                            Health
                        </Link>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Homepage;