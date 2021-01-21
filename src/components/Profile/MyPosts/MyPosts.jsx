import React from "react";
import Post from "./Post/Post";

import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = ({posts, newPostText, dispatch}) => {

    const postsElements = posts.map(el => (
        <Post message={el.post} likesCount={el.likesCount}/>
    ))

    const newPostElement = React.createRef();

    const addPost = () => dispatch(addPostActionCreator());

    const onPostChange = () => {
        const text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.inputWrap}>
                <textarea ref={newPostElement} placeholder={`Type your post...`} className={classes.textarea}
                          value={newPostText} onChange={onPostChange} />
                <input onClick={addPost} type={`submit`} value={`Add post`} className={classes.add}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
