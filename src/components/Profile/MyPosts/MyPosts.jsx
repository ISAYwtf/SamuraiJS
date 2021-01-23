import React from "react";
import Post from "./Post/Post";

import classes from './MyPosts.module.css';

const MyPosts = ({onPostChange, addPost, profilePage}) => {

    const {newPostText, posts} = profilePage;

    const postsElements = posts.map(el => (
        <Post message={el.post} likesCount={el.likesCount}/>
    ))

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.inputWrap}>
                <textarea placeholder={`Type your post...`} className={classes.textarea}
                          value={newPostText} onChange={onPostChange}/>
                <input onClick={addPost} type={`submit`} value={`Add post`} className={classes.add}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
