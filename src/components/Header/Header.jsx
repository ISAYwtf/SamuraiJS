import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login}) => {
    return (
        <header className={classes.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="logo" />
            <div className={classes.login}>
                {isAuth ? <p className={classes.loginInfo}>{login}</p>
                : <NavLink className={classes.loginInfo} to={`/login`}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
