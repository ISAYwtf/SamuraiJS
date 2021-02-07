import React from "react";
import Post from "./Post/Post";

import classes from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength300 = maxLengthCreator(300);

const MyPosts = ({addPost, profilePage}) => {

    const {posts} = profilePage;

    const postsElements = posts.map(el => (
        <Post message={el.post} key={el.id} likesCount={el.likesCount}/>
    ))

    const addNewPost = values => {
        addPost(values.newPost);
    }

    return (
        <div>
            <h2>My posts</h2>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.inputWrap}>
            <Field component={Textarea} name={"newPost"} placeholder={`Type your post...`}
                   className={classes.textarea} validate={[required, maxLength300]}/>
            <button className={classes.add}>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "postForm"})(AddPostForm);

export default MyPosts;
