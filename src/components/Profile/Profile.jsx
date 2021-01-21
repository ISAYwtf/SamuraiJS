import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from './Profile.module.css';

const Profile = ({profilePage, dispatch}) => {

    const {posts, newPostText} = profilePage;

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch}/>
        </div>
    )
}

export default Profile;
