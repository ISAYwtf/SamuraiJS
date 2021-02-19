import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} savePhoto={props.savePhoto}
                         updateProfile={props.updateProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
