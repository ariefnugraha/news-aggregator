import style from './css/smallheadline.module.css';
import {Link} from 'react-router-dom';

const SmallHeadline = ({title, category, time}) => {
    return (
        <div className={style.small_headline}>
            <h2>
                <Link to={{
                    pathname: "/detail",
                    search: `${title}`,
                    state: {newsTitle: title}
                }} title={title}>{title}</Link>
            </h2>
            <Link to="" className={style.category}>{category}</Link>
            <p>11:50</p>
        </div>
    )
}

export default SmallHeadline;