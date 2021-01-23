import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const {newPostText, posts} = store.getState().profilePage;

                const addPost = () => store.dispatch(addPostActionCreator());

                const onPostChange = (e) => {
                    const text = e.target.value;
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return <MyPosts onPostChange={onPostChange} addPost={addPost}
                                newPostText={newPostText} posts={posts}/>
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
