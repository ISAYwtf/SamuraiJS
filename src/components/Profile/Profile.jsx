import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from './Profile.module.css';

const Profile = ({state, addPost}) => {

    const {posts} = state;

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    )
}

export default Profile;
