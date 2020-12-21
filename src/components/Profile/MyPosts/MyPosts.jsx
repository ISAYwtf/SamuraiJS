import React from "react";
import Post from "./Post/Post";

import classes from './MyPosts.module.css';

const MyPosts = ({posts, addPost}) => {

    const postsElements = posts.map(el => (
        <Post message={el.post} likesCount={el.likesCount}/>
    ))

    const newPostElement = React.createRef();

    const addPostItem = () => {
        const text = newPostElement.current.value;
        addPost(text);
        newPostElement.current.value = "";
    }

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.inputWrap}>
                <textarea ref={newPostElement} placeholder={`Type your post...`} className={classes.textarea}></textarea>
                <input onClick={addPostItem} type={`submit`} value={`Add post`} className={classes.add}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
