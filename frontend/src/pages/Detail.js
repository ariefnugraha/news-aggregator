import {useState, useEffect} from 'react';
import style from './css/detail.module.css';

import Navbar from '../components/Navbar';
import NavbarDetail from '../components/NavbarDetail';


const Detail = () => {
    const [scrollPosition, setscrollPosition] = useState(0);
    const handleScroll = () => {
        console.log(window.scrollY);
        setscrollPosition(window.scrollY);
    }
    let renderNavbar;

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollPosition]);

    scrollPosition > 200 ? renderNavbar = <NavbarDetail /> : renderNavbar = <Navbar />

    return (
        <div className={style.detail}>
            {renderNavbar}
        </div>
       
    )
}

export default Detail;