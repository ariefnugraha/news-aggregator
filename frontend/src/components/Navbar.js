import React, {useState, useEffect} from 'react';
import axios from 'axios';
import style from './css/navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/news/backend/api/get/categories.php")
        .then(response => setcategories(response.data))
        .catch(error => console.log(error));
    }, [])

    const renderCategories = categories.map((category) => {
        return (
            <li>
                <Link to="" key={category.id}>{category.name}</Link>
            </li>
        )
    })

    return (
        <nav style={props.forStyle}>
            <h1>The Indonesia Times</h1>
            <p>We Give You True Story</p>
            <div className={style.menu_container}>
                <div className={style.menu}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {renderCategories}
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