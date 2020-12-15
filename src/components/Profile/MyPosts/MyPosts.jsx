import React from "react";
import Post from "./Post/Post";

import classes from './MyPosts.module.css';

const MyPosts = ({posts}) => {

    let postsElements = posts.map(el => (
        <Post message={el.post} likesCount={el.likesCount}/>
    ))

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.inputWrap}>
                <textarea placeholder={`Type your post...`}></textarea>
                <input type={`submit`} value={`Add post`}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
