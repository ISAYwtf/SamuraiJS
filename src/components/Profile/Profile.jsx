import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from './Profile.module.css';

const Profile = ({profilePage, addPost, updateNewPostText}) => {

    const {posts, newPostText} = profilePage;

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

export default Profile;
