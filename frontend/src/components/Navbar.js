import React from 'react';
import style from './css/navbar.module.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>The Indonesia Times</h1>
            <p>We Give You True Story</p>
            <div className={style.menu_container}>
                <div className={style.menu}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
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
                </div>

                <div className={style.right_menu}>
                    <ul>
                        <li>
                            <form>
                                <input type="text" placeholder="Apa Yang Kamu Cari?" required/>
                                <button type="submit"></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>



        </nav>

    )
}

export default Navbar;