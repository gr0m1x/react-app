import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    let state = props.store.getState().navbar

    console.log(state)
    let navbarItem = state.navList.map(l => {
        return (
            <li className="navList_item">
                <NavLink to={l.rout} activeClassName="active">{l.name}</NavLink>
            </li>
        )
    })
    return (
        <nav className="sidebar">
            <ul className="navList">
                {navbarItem}
            </ul>
        </nav>
    );
}

export default Navbar;