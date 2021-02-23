import React from "react";

import classes from './Post.module.css';

const Post = ({message, likesCount}) => {
    return (
        <div className={classes.post}>
            <p>{message}</p>
            <div className={classes.likes}>
                <small>Like</small>
                <small>{likesCount}</small>
            </div>
        </div>
    )
}

export default Post;
