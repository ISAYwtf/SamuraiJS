import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
    return (
        <header className={classes.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="logo"/>
            <div className={classes.login}>
                {isAuth
                    ? <div>
                        <p className={classes.loginInfo}>{login}</p>
                        <button onClick={logout}>Log Out</button>
                </div>
                    : <NavLink className={classes.loginInfo} to={`/login`}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
