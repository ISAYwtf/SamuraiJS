import {NavLink} from "react-router-dom";
import classes from "./HeaderLogin.module.css";
import Button from "../common/Button";
import React from "react";

const HeaderLogin = ({isAuth, login, logout}) => {
    return (
        <div className={classes.login}>
            {isAuth
                ? <div className={classes.loginUser}>
                    <NavLink to={"/profile"} className={classes.loginInfo}>{login}</NavLink>
                    <Button attr={{"onClick": logout}}>Log Out</Button>
                </div>
                : <NavLink className={classes.loginInfo} to={`/login`}>Login</NavLink>
            }
        </div>
    )
}

export default HeaderLogin;
