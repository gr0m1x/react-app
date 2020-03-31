import React from 'react';
import "./Header.css";
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return (
        <header className="appHeader">
            <img
                src="https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-03.png"
                alt="site logo"/>
            <div className="loginBlock">
                {props.isAuth
                    ? <div>
                        <NavLink to={"/profile/" + props.userId}>{props.login}</NavLink>
                        <button onClick={props.logout}>LogOut</button>
                      </div>
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;