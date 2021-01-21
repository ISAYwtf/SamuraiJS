import React from "react";
import Post from "./Post/Post";

import classes from './MyPosts.module.css';

const MyPosts = ({posts, newPostText, dispatch}) => {

    const postsElements = posts.map(el => (
        <Post message={el.post} likesCount={el.likesCount}/>
    ))

    const newPostElement = React.createRef();

    const addPostItem = () => {
        const action = {
            type: 'ADD-POST'
        };
        dispatch(action);
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        const action = {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text,
        };
        dispatch(action);
    }

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.inputWrap}>
                <textarea ref={newPostElement} placeholder={`Type your post...`} className={classes.textarea}
                          value={newPostText} onChange={onPostChange} />
                <input onClick={addPostItem} type={`submit`} value={`Add post`} className={classes.add}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
