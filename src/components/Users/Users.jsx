import React from 'react';
import classes from './Users.module.css';
import Pagination from "../common/Pagination/Pagination";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {

    const getPreloader = (flag) => {
        return flag ? <Preloader/> : null;
    }

    return <div className={classes.usersWrap}>
        {getPreloader(props.isFetching)}
        {
            props.users.map(el => {
                const followBtn = flag => flag ? "Unfollow" : "Follow";

                const checkFollowing = (flag, id) => {
                    flag ?
                        usersAPI.unFollowTo(id).then(data => {
                            if (data.resultCode === 0) {
                                props.unFollow(id);
                            }
                        })
                        : usersAPI.followTo(id).then(data => {
                            if (data.resultCode === 0) {
                                props.follow(id);
                            }
                        });
                }

                const checkImage = (img, name) => {
                    if (img) {
                        return <img src={img} alt="avatar"/>;
                    } else {
                        return name.substr(0, 1).toUpperCase();
                    }
                };

                return (
                    <div className={classes.user} key={el.id}>
                        <div className={classes.userAvatar}>
                            <NavLink to={`/profile/${el.id}`} className={classes.avatarImage}>
                                {checkImage(el.photos.small, el.name)}
                            </NavLink>
                            <button className={classes.avatarButton}
                                    onClick={() => checkFollowing(el.followed, el.id)}>
                                {followBtn(el.followed)}
                            </button>
                        </div>
                        <NavLink to={`/profile/${el.id}`} className={classes.userInfo}>
                            <div className={classes.infoMain}>
                                <div className={classes.infoName}>{el.name}</div>
                                <div className={classes.infoStatus}>{el.status}</div>
                            </div>
                            <div className={classes.infoLocation}>
                                <div className={classes.infoCountry}>{'el.location.country'}</div>
                                <div className={classes.infoCity}>{'el.location.city'}</div>
                            </div>
                        </NavLink>
                    </div>
                );
            })
        }
        <Pagination {...props}/>
    </div>
}

export default Users;
