import React from 'react';
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";

const User = ({user, ...props}) => {
    const followBtn = flag => flag ? "Unfollow" : "Follow";
    const checkFollowing = (flag, id) => flag ? props.unFollowTo(id) : props.followTo(id);

    const checkImage = (img, name) => {
        return img
            ? <img src={img} alt="avatar"/>
            : name.substr(0, 1).toUpperCase();
    };

    return (
        <div className={classes.user} key={user.id}>
            <div className={classes.userAvatar}>
                <NavLink to={`/profile/${user.id}`} className={classes.avatarImage}>
                    {checkImage(user.photos.small, user.name)}
                </NavLink>
                <button disabled={props.isFollowing.some(id => id === user.id)}
                        className={classes.avatarButton}
                        onClick={() => checkFollowing(user.followed, user.id)}>
                    {followBtn(user.followed)}
                </button>
            </div>
            <NavLink to={`/profile/${user.id}`} className={classes.userInfo}>
                <div className={classes.infoMain}>
                    <div className={classes.infoName}>{user.name}</div>
                    <div className={classes.infoStatus}>{user.status}</div>
                </div>
                <div className={classes.infoLocation}>
                    <div className={classes.infoCountry}>{'user.location.country'}</div>
                    <div className={classes.infoCity}>{'user.location.city'}</div>
                </div>
            </NavLink>
        </div>
    );
}

export default User;
