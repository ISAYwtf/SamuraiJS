import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({store}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    )
}

export default Profile;
