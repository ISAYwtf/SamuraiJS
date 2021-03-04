import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "./../../logo.svg";
import HeaderLoginContainer from "../HeaderLogin/HeaderLoginContainer";
import HeaderBurger from "./HeaderBurger/HeaderBurger";

const Header = props =>
    <header className={`${classes.header} component`}>
        <NavLink to={"/profile"} className={classes.logo}>
            <img src={logo} alt="logo"/>
        </NavLink>

        <div className={classes.headerLogin}>
            <HeaderLoginContainer/>
        </div>

        <HeaderBurger/>
    </header>

export default Header;
