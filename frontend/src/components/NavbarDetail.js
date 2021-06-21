import style from './css/navbar-detail.module.css';
import { Link } from 'react-router-dom';

const NavbarDetail = (props) => {
    return (
        <nav className={style.navbar}>
            <div className={style.menu}>
                <ul>
                    <li>
                        <Link to="/">Beranda</Link>
                    </li>
                    <li>
                        <Link to="">Olahraga</Link>
                    </li>
                    <li>
                        <Link to="">Hiburan</Link>
                    </li>
                    <li>
                        <Link to="">Teknologi</Link>
                    </li>
                    <li>
                        <Link to="">Kesehatan</Link>
                    </li>
                    <li>
                        <Link to="">Sains</Link>
                    </li>
                </ul>
                <form>
                    <input type="text" placeholder="Apa Yang Ingin Kamu Ketahui?" required />
                    <button></button>
                </form>
            </div>
            <div className={style.nav_title}>
                <div className={style.back_container}>
                    <Link to="/"></Link>
                </div>
                <div className={style.main_title}>
                    <p>Indonesia calls for international support to resolve Israel-Palestine crisis</p>
                    <p>by <Link to="">Alexander Christian Hutabarat</Link> in <Link to="">General</Link></p>
                </div>
                <div className={style.share}>
                    <p>Share</p>
                    <Link to="/">adad</Link>
                </div>
            </div>
            <hr/>
        </nav>
    )
}

export default NavbarDetail;