import style from './css/masonry.module.css';
import { Link } from 'react-router-dom';

const MasonryItem = (props) => {
    let parseTime = new Date(props.date);
    let getHour = parseTime.toLocaleTimeString();
    return (
        <div className={style.masonry_item_container}>
            <Link to={{
                    pathname: "/detail",
                    search: `${props.title}`,
                    state: {newsTitle: props.title}
                }} title={props.title}>
                <img src={props.image} alt={props.title} />
            </Link>
            <h2>
                <Link to={{
                    pathname: "/detail",
                    search: `${props.title}`,
                    state: {newsTitle: props.title}
                }} title={props.title}>{props.title}</Link>
            </h2>
            <p>{props.description}</p>
            <span>
                <Link to="">{props.category}</Link>
                {getHour}
            </span>
        </div>
    )
}

export default MasonryItem;