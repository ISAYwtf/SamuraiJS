import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "../common/Button";
import logo from "./../../logo.svg";

const Header = ({isAuth, login, logout}) => {
    return (
        <header className={`${classes.header} component`}>
            <NavLink to={"/profile"} className={classes.logo}>
                <img src={logo} alt="logo"/>
            </NavLink>
            <div className={classes.login}>
                {isAuth
                    ? <div className={classes.loginUser}>
                        <NavLink to={"/profile"} className={classes.loginInfo}>{login}</NavLink>
                        <Button attr={{"onClick": logout}}>Log Out</Button>
                    </div>
                    : <NavLink className={classes.loginInfo} to={`/login`}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
