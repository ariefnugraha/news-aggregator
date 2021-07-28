import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './css/shuffle.module.css';
import SmallNews from './SmallNews';

const Shuffle = ({ newsId }) => {
    const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const [news, setnews] = useState([{
        id: 0,
        image: "https://akcdn.detik.net.id/community/media/visual/2017/09/14/024a4104-dc93-4f94-920c-fedf21be10b0_169.jpg?w=620",
        title: " ",
        category: ' ',
        date: ' '
    }]);

    useEffect(() => {
        axios.get("http://localhost/news/backend/api/get/shuffle.php", {
            params: { newsId }
        })
            .then(response => setnews(response.data))
            .catch(error => console.log(error));
        //eslint-disable-next-line
    }, []);

    if (news === undefined || news === null) {
        console.log("GADADA")
    } else {
        let renderSmallShuffle = news.slice(1, news.length).map((news) => {
            return (
                <SmallNews key={news.id} image={news.image} title={news.title} category={news.category} date={news.date} />
            )
        })
        let bigShuffleDate = new Date(news[0].date);
        let getDate = `${bigShuffleDate.getDate()} ${month[bigShuffleDate.getMonth()]} ${bigShuffleDate.getFullYear()}, ${bigShuffleDate.getHours()}:${bigShuffleDate.getMinutes() < 10 ? '0' : ''}${bigShuffleDate.getMinutes()}`;

        return (
            <div className={style.shuffle_container}>
                <div className={style.big_news_container}>
                    <div className={style.news_image}>
                        <img src={news[0].image} alt={news[0].title} />
                    </div>
                    <div className={style.news_caption}>
                        <h2>
                            <Link to={{
                                pathname: "/detail",
                                search: `${news[0].title}`,
                                state: { newsTitle: news[0].title }
                            }}>{news[0].title}</Link>
                        </h2>

                        <div className={style.info}>
                            <p>{news[0].description}</p>
                            <Link to={{
                                pathname: "/category",
                                search: news[0].title,
                                state: { category: news[0].category }
                            }}>{news[0].category}</Link>
                            <span>{getDate}</span>
                        </div>
                    </div>
                </div>
                <div className={style.small_news_container}>
                    {renderSmallShuffle}
                </div>
            </div>
        )
    }

}
export default Shuffle;