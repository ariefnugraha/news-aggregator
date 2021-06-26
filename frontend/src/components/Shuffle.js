import { Link } from 'react-router-dom';
import style from './css/shuffle.module.css';

import SmallNews from './SmallNews';

const Shuffle = () => {
    return (
        <div className={style.shuffle_container}>
            <div className={style.big_news_container}>
                <div className={style.news_image}>
                    <img src="https://mojok.co/wp-content/uploads/2019/06/menangis-laki-laki.jpg" alt="TITLE" />
                </div>
                <div className={style.news_caption}>
                    <h2>
                        <Link to="#">'Epic Iran' puts 5,000 years of artefacts on show at London's V&A</Link>
                    </h2>

                    <p>From ancient sculptures to contemporary photographs, objects spanning 5,000 years of Iranian art, culture and design go on display at London's Victoria & Albert (V&A) museum this week.</p>

                    <div className={style.info}>
                        <Link to="#">General</Link>
                        <span>11 January 2020</span>
                    </div>
                </div>
            </div>
            <div className={style.small_news_container}>
                <SmallNews />
                <SmallNews />
                <SmallNews />
                <SmallNews />
            </div>
        </div>
    )
}

export default Shuffle;