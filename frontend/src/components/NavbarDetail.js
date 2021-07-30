import style from './css/navbar-detail.module.css';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton, TelegramShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon, TelegramIcon } from 'react-share';

const NavbarDetail = ({ title, category, writer }) => {
    let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    let setTitle
    if (deviceWidth > 991 && title.length > 70) {
        setTitle = `${title.substr(0, 70)}...`;
    } else if(deviceWidth > 767 && deviceWidth < 992 && title.length > 50){
        setTitle = `${title.substr(0, 50)}...`;
    } else {
        setTitle = title;
    }

    return (
        <nav className={style.navbar}>
            {/* <div className={style.menu}>
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
                    <input type="text" placeholder="Cari Berita" required />
                    <button></button>
                </form>
            </div> */}
          
            <div className={style.nav_title}>
                <div className={style.back_container}>
                    <Link to="/"></Link>
                </div>
                <div className={style.main_title}>
                    <p>{setTitle}</p>
                    <p>oleh <Link to="">{writer}</Link> di <Link to="">{category}</Link></p>
                </div>
                <div className={style.share}>
                    <p>Share</p>
                    <FacebookShareButton url={title}>
                        <FacebookIcon size={35} iconFillColor={'black'} bgStyle={{fill: "#fff"}}/>
                    </FacebookShareButton>

                    <TwitterShareButton url={title}>
                        <TwitterIcon size={35} iconFillColor={'black'} bgStyle={{fill: "#fff"}}/>
                    </TwitterShareButton>

                    <WhatsappShareButton url={title}>
                        <WhatsappIcon size={35} iconFillColor={'black'} bgStyle={{fill: "#fff"}} />
                    </WhatsappShareButton>

                    <TelegramShareButton url={title}>
                        <TelegramIcon size={35} iconFillColor={'black'} bgStyle={{fill: "#fff"}} />
                    </TelegramShareButton>

                    <LinkedinShareButton url={title}>
                        <LinkedinIcon size={35} iconFillColor={'black'} bgStyle={{fill: "#fff"}} />
                    </LinkedinShareButton>
                </div>
            </div>
            <hr />
        </nav>
    )
}

export default NavbarDetail;