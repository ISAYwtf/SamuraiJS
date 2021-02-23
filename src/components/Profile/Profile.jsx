import React, {useState} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";
import Button from "../common/Button";
import ProfileDataForm from "./ProfileInfo/ProfileDataForm/ProfileDataForm";
import classes from "./Profile.module.css";

const Profile = ({isOwner, profile, ...props}) => {
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        if (isOwner) setEditMode(true);
    }

    const deActivateMode = formData => {
        props.updateProfile(formData)
            .then(() => setEditMode(false));
    }

    if (!profile) return <Preloader/>

    return (
        <div className={`component--wrap`}>
            {!editMode
                ? <ProfileInfo isOwner={isOwner} profile={profile} savePhoto={props.savePhoto}
                         updateProfile={props.updateProfile}/>
                : <ProfileDataForm onSubmit={deActivateMode} profile={profile} initialValues={profile}/>}
            {!editMode && isOwner
                ? <Button className={classes.buttonEditMode} attr={{"onClick": activateEditMode}}>Edit profile</Button>
                : ""}
            <PostsContainer/>
        </div>
    )
}

export default Profile;
