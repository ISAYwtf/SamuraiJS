import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList";

const Navbar = ({state}) => {
    return (
        <nav className={classes.nav}>
            <NavLink to={`/profile`} activeClassName={classes.active} className={classes.item}>
                Profile
            </NavLink>
            <NavLink to={`/dialogs`} activeClassName={classes.active} className={classes.item}>
                Messages
            </NavLink>
            <NavLink to={`/news`} activeClassName={classes.active} className={classes.item}>
                News
            </NavLink>
            <NavLink to={`/music`} activeClassName={classes.active} className={classes.item}>
                Music
            </NavLink>
            <NavLink to={`/settings`} activeClassName={classes.active} className={classes.item}>
                Settings
            </NavLink>
            <FriendsList friends={state.friends} />
        </nav>
    )
}

export default Navbar;
