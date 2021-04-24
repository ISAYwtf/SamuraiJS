import React from 'react';
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";

const UserImage = ({img, name, userId}) =>
    <div className={classes.avatarImage}>
        {img
            ? <img src={img} alt="avatar"/>
            : name.substr(0, 1).toUpperCase()}
    </div>

const FollowBtn = props => {
    const followBtn = flag => flag ? "Unfollow" : "Follow";

    const checkFollowing = (flag, id, e) => {
        e.preventDefault();

        if (!props.isAuth) {
            props.history.push("/login");
        }

        return flag ? props.unFollowTo(id) : props.followTo(id);

    };

    return <button disabled={props.isFollowing.some(id => id === props.user.id)}
                   className={`${props.className}`}
                   onClick={e => checkFollowing(props.user.followed, props.user.id, e)}>
        {followBtn(props.user.followed)}
    </button>
}

const UserAvatar = props =>
    <div className={classes.userAvatar}>
        <UserImage img={props.user.photos.small} name={props.user.name} userId={props.user.id}/>
        <FollowBtn {...props} className={classes.avatarButton}/>
    </div>

const UserInfo = ({user}) =>
    <div className={classes.userInfo}>
        <div className={classes.infoName}>{user.name}</div>
        <div className={classes.infoStatus}>{user.status}</div>
    </div>

const User = props =>
    <NavLink to={`/profile/${props.user.id}`} className={classes.user}>
        <UserAvatar user={props.user} unFollowTo={props.unFollowTo} followTo={props.followTo}
                    isFollowing={props.isFollowing} isAuth={props.isAuth} history={props.history}/>
        <UserInfo user={props.user}/>
        <FollowBtn className={classes.followBtnMobile} user={props.user} unFollowTo={props.unFollowTo}
                   followTo={props.followTo}
                   isFollowing={props.isFollowing} isAuth={props.isAuth} history={props.history}/>
    </NavLink>

export default User;
