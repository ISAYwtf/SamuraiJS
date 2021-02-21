import React from 'react';
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";

const UserImage = ({img, name, userId}) =>
    <div className={classes.avatarImage}>
        {img
            ? <img src={img} alt="avatar"/>
            : name.substr(0, 1).toUpperCase()}
    </div>

const UserAvatar = ({user, ...props}) => {
    const followBtn = flag => flag ? "Unfollow" : "Follow";
    const checkFollowing = (flag, id) => flag ? props.unFollowTo(id) : props.followTo(id);

    return <div className={classes.userAvatar}>
        <UserImage img={user.photos.small} name={user.name} userId={user.id}/>
        <button disabled={props.isFollowing.some(id => id === user.id)}
                className={classes.avatarButton}
                onClick={() => checkFollowing(user.followed, user.id)}>
            {followBtn(user.followed)}
        </button>
    </div>
}

const UserInfo = ({user}) =>
    <div className={classes.userInfo}>
        <div className={classes.infoName}>{user.name}</div>
        <div className={classes.infoStatus}>{user.status}</div>
    </div>

const User = ({user, ...props}) =>
    <NavLink to={`/profile/${user.id}`} className={classes.user}>
        <UserAvatar user={user} unFollowTo={props.unFollowTo} followTo={props.followTo}
                    isFollowing={props.isFollowing}/>
        <UserInfo user={user}/>
    </NavLink>

export default User;
