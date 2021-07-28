import style from './css/smallnews.module.css';
import { Link } from 'react-router-dom';

const NewsList = ({ image, title, category, date }) => {
    const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus' , 'September', 'Oktober', 'November', 'Desember'];
    let convertDate = new Date(date);
    let dateComplete = `${convertDate.getDate()} ${month[convertDate.getMonth()]} ${convertDate.getFullYear()}, ${convertDate.getHours()}:${convertDate.getMinutes()}`;
    
    return (
        <div className={style.small_news}>
            <div className={style.image}>
                <Link to={{
                    pathname: "/detail",
                    search: title,
                    state: { newsTitle: title }
                }}>
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className={style.caption}>
                <h2>
                    <Link to={{
                        pathname: "/detail",
                        search: title,
                        state: { newsTitle: title }
                    }}>{title}</Link>
                </h2>
                <Link to={{
                    pathname: "/category",
                    search: category,
                    state: category
                }} className={style.category}>{category}</Link>
                <span>{dateComplete}</span>
            </div>
        </div>
    )
}

export default NewsList;