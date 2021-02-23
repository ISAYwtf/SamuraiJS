import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

// import FriendsList from "./FriendsList/FriendsList";
// import {connect} from "react-redux";
// import {getSidebarFriends} from "../../redux/Sidebar/sidebar-selectors";

// const mapStateToProps = (state) => ({
//     friends: getSidebarFriends(state)
// })

// const FriendsListContainer = connect(mapStateToProps)(FriendsList);

const Navbar = () =>
    <nav className={`component component--sidebar`}>
        <NavLink to={`/profile`} activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
            Profile
        </NavLink>
        <NavLink to={`/dialogs`} activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
            Messages
        </NavLink>
        <NavLink to={`/users`} activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
            Users
        </NavLink>
        <NavLink to={`/music`} activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
            Music
        </NavLink>
        <NavLink to={`/settings`} activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
            Settings
        </NavLink>
        {/*<FriendsListContainer />*/}
    </nav>

export default Navbar;
