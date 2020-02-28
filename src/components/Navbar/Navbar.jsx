import React from 'react';
import "./_navbar.scss";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="sidebar">
            <ul className="navList">
                <li className="navList_item">
                    <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                </li>
                <li className="navList_item">
                    <NavLink to="/dialogs" activeClassName="active">Messages</NavLink>
                </li>
                <li className="navList_item">
                    <NavLink to="/news" activeClassName="active">News</NavLink>
                </li>
                <li className="navList_item">
                    <NavLink to="/music" activeClassName="active">Music</NavLink>
                </li>
                <li className="navList_item">
                    <NavLink to="/settings" activeClassName="active">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;