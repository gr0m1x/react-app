import React from 'react';
import style from "./Navbar.module.css";

console.log(style)

const Navbar = () => {
    return (
        <nav className={style.sidebar}>
            <ul className={style.navList}>
                <li className={style.item}><a href="#">Profile</a></li>
                <li className={`${style.item} ${style.active}`}><a href="#">Messages</a></li>
                <li className={style.item}><a href="#">News</a></li>
                <li className={style.item}><a href="">Music</a></li>
                <li className={style.item}><a href="">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;