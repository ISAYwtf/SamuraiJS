import React from "react";
import classes from './ProfileInfo.module.css';
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileJob from "./ProfileJob/ProfileJob";
import ProfileMainInfo from "./ProfileMainInfo/ProfileMainInfo";
import ProfileAbout from "./ProfileAbout/ProfileAbout";

const ProfileInfo = ({isOwner, profile, ...props}) => {
    return (
        <div>
            <div className={classes.profileUser}>
                <ProfileMainInfo fullName={profile.fullName} photos={profile.photos}
                               userId={profile.userId} isOwner={isOwner} savePhoto={props.savePhoto}/>
                <ProfileAbout aboutMe={profile.aboutMe}/>
                <ProfileJob lookingForAJob={profile.lookingForAJob}
                            lookingForAJobDescription={profile.lookingForAJobDescription}/>
                <ProfileContacts contacts={profile.contacts}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
