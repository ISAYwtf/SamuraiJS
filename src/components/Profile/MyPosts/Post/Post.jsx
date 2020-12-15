import React from "react";

import classes from './Post.module.css';

const Post = ({message, likesCount}) => {
    return (
        <div className={classes.post}>
            <p>{message}</p>
            <small>Like</small>
            <small>{likesCount}</small>
        </div>
    )
}

export default Post;
