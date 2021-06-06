import style from './css/smallheadline.module.css';
import {Link} from 'react-router-dom';

const SmallHeadline = () => {
    return (
        <div className={style.small_headline}>
            <h2>
                <Link to="" title="Memahami Serba-Serbi NFT yang Makin Dilirik Investor Hingga Seniman di Indonesia">Memahami Serba-Serbi NFT yang Makin Dilirik Investor Hingga Seniman di Indonesia</Link>
            </h2>
            <Link to="" className={style.category}>Ekonomi</Link>
            <p>11:50</p>
        </div>
    )
}

export default SmallHeadline;