import React from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={style.sidebar}>
            <ul className={style.navList}>
                <li className={style.item}>
                    <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="/news" activeClassName={style.active}>News</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;