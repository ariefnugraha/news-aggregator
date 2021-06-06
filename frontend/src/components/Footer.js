import { Link } from 'react-router-dom';
import style from './css/footer.module.css';

import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';
import youtube from '../assets/icons/youtube.svg';
import linkedin from '../assets/icons/linkedin.svg';

const Footer = () => {
    return (
        <footer>
            <span className={style.brand}>The Indonesia Times</span>
            <span className={style.sitelink}>
                <Link to="">About</Link>
                <Link to="">Contact</Link>
                <Link to="">Terms</Link>
                <Link to="">Privacy Policy</Link>
            </span>
            <span className={style.social}>
                <Link to="">
                    <img src={facebook} alt="Facebook" />
                </Link>
                <Link to="">
                    <img src={instagram} alt="Instagram" />
                </Link>
                <Link to="">
                    <img src={twitter} alt="Twitter" />
                </Link>
                <Link to="">
                    <img src={youtube} alt="Youtube" />
                </Link>
                <Link to="">
                    <img src={linkedin} alt="Linkedin" />
                </Link>
            </span>
            <span className={style.copyright}>Copyright 2021 The Indonesia Times. All Rights Reserved</span>
        </footer>
    )
}

export default Footer;