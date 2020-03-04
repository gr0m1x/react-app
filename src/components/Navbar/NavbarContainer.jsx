import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Navbar = (props) => {
    let navbarItem = props.navList.map(l => {
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

let mapStateToProps = (state) => {
    return{
        navList: state.navbar.navList,
    }
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;