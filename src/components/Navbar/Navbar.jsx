import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    friends: state.sidebar.friends
})

const FriendsListContainer = connect(mapStateToProps)(FriendsList);

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <NavLink to={`/profile`} activeClassName={classes.active} className={classes.item}>
                Profile
            </NavLink>
            <NavLink to={`/dialogs`} activeClassName={classes.active} className={classes.item}>
                Messages
            </NavLink>
            <NavLink to={`/users`} activeClassName={classes.active} className={classes.item}>
                Users
            </NavLink>
            <NavLink to={`/music`} activeClassName={classes.active} className={classes.item}>
                Music
            </NavLink>
            <NavLink to={`/settings`} activeClassName={classes.active} className={classes.item}>
                Settings
            </NavLink>
            <FriendsListContainer />
        </nav>
    )
}

export default Navbar;
